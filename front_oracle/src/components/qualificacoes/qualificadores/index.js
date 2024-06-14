import React, { useEffect, useState, useCallback } from "react";
import {
    View,
    TextInput,
    Dimensions,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Modal,
} from "react-native";
import stylesQualificadores from "./qualificadores.styles";
import { CardQlt } from "../cardQlt";
import { useFocusEffect } from "@react-navigation/native";
import Connection from "../../../connection";
import { colors } from "../../../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BotaoQlf } from "../botao";
import { FontAwesome } from "@expo/vector-icons";
import * as Styles from "../../../styles/index";

export function Qualificadores() {
    const [qualificationData, setQualificationData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userID, setUserID] = useState(null);
    const [expertise_id, setExpertiseID] = useState(null);
    const [allChecked, setAllChecked] = useState(false); // Novo estado para rastrear checkboxes
    const conn = Connection();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalIcon, setModalIcon] = useState("");
    const [modalIconColor, setModalIconColor] = useState("");

    const fetchUserID = async () => {
        try {
            const id = await AsyncStorage.getItem("user_id");
            if (id !== null) {
                setUserID(id);
            }
        } catch (error) {
            console.error("Error retrieving user ID:", error);
        }
    };
    const fetchExpertiseID = async () => {
        try {
            const id = await AsyncStorage.getItem("expertise_id");
            if (id !== null) {
                setExpertiseID(id);
            }
        } catch (error) {
            console.error("Error retrieving user ID:", error);
        }
    };

    useEffect(() => {
        const interval = setInterval(fetchUserID, 1000); // Verifica a cada segundo
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    useEffect(() => {
        const interval = setInterval(fetchExpertiseID, 1000); // Verifica a cada segundo
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    useEffect(() => {
        fetchUserID(); // Chama fetchUserID quando o componente é montado
    }, []);

    useEffect(() => {
        fetchExpertiseID(); // Chama fetchUserID quando o componente é montado
    }, []);

    const fetchQualification = async () => {
        if (userID && expertise_id !== null) {
            try {
                const response = await conn.get(
                    `/expertises/${expertise_id}/users/${userID}/qualifications`
                );
                setQualificationData(response.data);
                setLoading(false);
                checkAllChecked(response.data); // Verifica se todos os checkboxes estão marcados ao carregar os dados
            } catch (error) {
                console.error("Error fetching qualification:", error);
            }
        }
    };

    const updateExpertise = async () => {
        try {
            const response = await conn.post("/userExpertises", {
                user_id: userID,
                expertise_id: expertise_id,
            });
            console.log(response.data);
            setModalMessage("Qualificações salvas com sucesso!");
            setModalIcon("check-circle");
            setModalIconColor(Styles.colors.vermelho);
            setModalVisible(true);
        } catch (error) {
            console.error("Error updating qualification:", error);
            setModalMessage("Erro ao salvar as qualificações.");
            setModalIcon("times-circle");
            setModalVisible(true);
        }
    };

    useEffect(() => {
        fetchQualification(); // Chama fetchQualification quando userID muda
    }, [userID, expertise_id]);

    useFocusEffect(
        useCallback(() => {
            fetchQualification(); // Atualiza as qualification ao focar na tela
        }, [userID, expertise_id]) // Reexecuta sempre que o userID mudar
    );

    console.log(allChecked)

    const checkAllChecked = (qualifications) => {
        const allCompleted = qualifications.every(q => q.completed);
        setAllChecked(allCompleted);
    };

    const handleOptionChange = () => {
        // Atualiza a verificação de todos os checkboxes sempre que uma opção mudar
        fetchQualification();
    };

    if (loading) {
        return (
            <View style={stylesQualificadores.loadingContainer}>
                <ActivityIndicator size="large" color={colors.vermelho} />
            </View>
        );
    }

    return (
        <View>
            <View style={stylesQualificadores.container}>
                {qualificationData.map((qualification) => (
                    <CardQlt
                        key={qualification.qualification_id}
                        qualification={qualification}
                        onOptionChange={handleOptionChange} // Passa a função de callback para atualizar o estado
                    />
                ))}
            </View>
            <BotaoQlf button="Salvar" onPress={updateExpertise} disabled={!allChecked} />
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={stylesQualificadores.modalOverlay}>
                    <View style={stylesQualificadores.modalContainer}>
                        <FontAwesome
                            name={modalIcon}
                            size={40}
                            color={modalIconColor}
                            style={stylesQualificadores.modalIcon}
                        />
                        <Text style={stylesQualificadores.modalText}>
                            {modalMessage}
                        </Text>
                        <TouchableOpacity
                            style={stylesQualificadores.modalButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={stylesQualificadores.modalButtonText}>
                                OK
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
