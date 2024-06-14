import React, { useState, useEffect } from "react";
import {
    View,
    TextInput,
    Dimensions,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Modal,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import stylesFormEditarAdm from "./formAdm.styles";
import { Ionicons } from "@expo/vector-icons";
import { ButtonSmall } from "../../common/buttonSmall";
import Connection from "../../../connection";
import * as Styles from "../../../styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

export function FormEditarAdm() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [admID, setAdmID] = useState(null);
    const conn = Connection();
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalIcon, setModalIcon] = useState("");
    const [modalIconColor, setModalIconColor] = useState("");

    const windowWidth = Dimensions.get("window").width;

    const fetchAdmID = async () => {
        try {
            const id = await AsyncStorage.getItem("adm_id");
            console.log("Fetched adm_id: ", id);
            return id;
        } catch (error) {
            console.error("Error retrieving adm_id:", error);
            return null;
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () => {
                setLoading(true); // Set loading to true when data fetching starts
                const id = await fetchAdmID();
                setAdmID(id);
                if (id) {
                    try {
                        const response = await conn.get(`/partner/${id}`);
                        if (response && response.data) {
                            setNome(response.data.user_name || "");
                            setEmail(response.data.email || "");
                        } else {
                            console.error("Invalid response structure", response);
                        }
                    } catch (error) {
                        console.error("Error fetching user:", error);
                    }
                } else {
                    console.error("adm_id not found");
                }
                setLoading(false); // Set loading to false when data fetching ends
            };
            fetchData();

            return () => {
                setNome("");
                setEmail("");
                setPassword("");
                setAdmID(null);
            };
        }, [])
    );

    const updateUserData = async () => {
        if (!admID) {
            setModalMessage("ID do administrador não encontrado.");
            setModalIcon("times-circle");
            setModalVisible(true);
            return;
        }
        setLoading(true);
        try {
            console.log(`Attempting to update user with ID: ${admID}`);
            const response = await conn.put(`/partner/${admID}`, {
                user_name: nome,
                email: email,
            });
            console.log("User atualizado:", response.data);
            setModalMessage("Dados atualizados!");
            setModalIcon("check-circle");
            setModalIconColor(Styles.colors.vermelho);
            setModalVisible(true);
        } catch (error) {
            console.error("Error updating user data:", error);
            setModalMessage(`Erro ao atualizar dados! Status code: ${error.response?.status || 'unknown'}`);
            setModalIcon("times-circle");
            setModalVisible(true);
        } finally {
            setLoading(false);
        }
    };    

    const renderPencilButton = () => {
        return (
            <TouchableOpacity onPress={() => console.log("Pressed pencil button")}>
                <Ionicons name="pencil" size={18} color="#C74634" />
            </TouchableOpacity>
        );
    };

    const handlePress = async () => {
        try {
            const admID = await fetchAdmID();
            const response = await conn.put(`/partners/${admID}`, {
                name: nome,
                email: email,
            });
            console.log("User atualizado:", response.data);
            setModalMessage("Usuário atualizado com sucesso!");
            setModalIcon("check-circle");
            setModalIconColor(Styles.colors.vermelho);
            setModalVisible(true);
        } catch (error) {
            console.error("Erro ao atualizar user:", error);
        }
    };

    const handleDelete = async () => {
        try {
            const response = await conn.delete(`/partners/${admID}`, {
                data: { userType: "consultor" }, // Incluí o corpo da solicitação com o tipo de usuário
            });
            navigation.goBack();
            setModalMessage("Usuário excluído com sucesso!");
            setModalIcon("check-circle");
            setModalIconColor(Styles.colors.vermelho);
            setModalVisible(true);
            console.log("User deletado:", response.data);
        } catch (error) {
            console.error("Erro ao deletar user:", error);
        }
    };

    if (loading) {
        return (
            <View style={stylesFormEditarAdm.loadingContainer}>
                <ActivityIndicator size="large" color={Styles.colors.vermelho} />
            </View>
        );
    }

    return (
        <View style={stylesFormEditarAdm.container}>
            <View style={[stylesFormEditarAdm.formContainer, { width: windowWidth }]}>
                <View style={stylesFormEditarAdm.inputContainer}>
                    <TextInput
                        style={stylesFormEditarAdm.input}
                        placeholder="Nome"
                        onChangeText={(text) => setNome(text)}
                        value={nome}
                    />
                    {renderPencilButton()}
                </View>
                <View style={stylesFormEditarAdm.inputContainer}>
                    <TextInput
                        style={stylesFormEditarAdm.input}
                        placeholder="Email"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        keyboardType="email-address"
                    />
                    {renderPencilButton()}
                </View>
                <View style={stylesFormEditarAdm.inputContainer}>
                    <TextInput
                        style={stylesFormEditarAdm.input}
                        placeholder="***********"
                        editable={false}
                    />
                </View>
                <TouchableOpacity onPress={handleDelete}>
                    <Text style={stylesFormEditarAdm.texto}>Excluir</Text>
                </TouchableOpacity>
                <ButtonSmall button="Salvar" onPress={handlePress} />
            </View>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={stylesFormEditarAdm.modalOverlay}>
                    <View style={stylesFormEditarAdm.modalContainer}>
                        <FontAwesome
                            name={modalIcon}
                            size={40}
                            color={modalIconColor}
                            style={stylesFormEditarAdm.modalIcon}
                        />
                        <Text style={stylesFormEditarAdm.modalText}>
                            {modalMessage}
                        </Text>
                        <TouchableOpacity
                            style={stylesFormEditarAdm.modalButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={stylesFormEditarAdm.modalButtonText}>
                                OK
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default FormEditarAdm;
