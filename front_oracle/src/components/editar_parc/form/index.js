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
import stylesFormEditParc from "./formEditParc.styles";
import { ButtonSmall } from "../../common/buttonSmall";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Styles from "../../../styles";
import Connection from "../../../connection";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export function FormEditParc() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isToggleButtonOn, setToggleButtonOn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalIcon, setModalIcon] = useState("");
    const [modalIconColor, setModalIconColor] = useState("");

    const navigation = useNavigation();
    const conn = Connection();
    console.log(nome);
    console.log(email);

    const fetchUserId = async () => {
        try {
            const userId = await AsyncStorage.getItem("user_id");
            return userId;
        } catch (error) {
            console.error("Error retrieving user_id:", error);
            return null;
        }
    };

    const windowWidth = Dimensions.get("window").width;

    const renderPencilButton = () => {
        return (
            <TouchableOpacity
                onPress={() => console.log("Pressed pencil button")}
            >
                <Ionicons name="pencil" size={18} color="#C74634" />
            </TouchableOpacity>
        );
    };

    const toggleButtonPress = () => {
        setToggleButtonOn(!isToggleButtonOn);
    };

    // Define um listener para o evento de foco da tela
    useFocusEffect(
        React.useCallback(() => {
            // Função de limpeza ao entrar na tela
            const fetchData = async () => {
                const userId = await fetchUserId();
                console.log(userId);
                if (userId) {
                    try {
                        const response = await conn.get(`/partner/${userId}`);
                        setUser(response.data);
                        setLoading(false);
                        setNome(response.data.user_name);
                        setEmail(response.data.email);
                    } catch (error) {
                        console.error("Error fetching user:", error);
                    }
                } else {
                    setLoading(false);
                }
            };
            fetchData();

            // Função de limpeza ao sair da tela
            return () => {
                setNome(""); // Limpa o estado do nome
                setEmail(""); // Limpa o estado do email
                setPassword(""); // Limpa o estado da senha
                setShowPassword(false); // Reseta o estado para esconder a senha
                setToggleButtonOn(false); // Reseta o estado do botão de alternância
                setLoading(true); // Reseta o estado de carregamento
                setUser(null); // Reseta o estado do usuário
            };
        }, [])
    );

    const handlePress = async () => {
        try {
            const userId = await fetchUserId();
            const response = await conn.put(`/partners/${userId}`, {
                name: nome,
                email: email,
            });
            console.log("User atualizado:", response.data);
            setModalMessage("Parceiro atualizado com sucesso!");
            setModalIcon("check-circle");
            setModalIconColor(Styles.colors.vermelho);
            setModalVisible(true);
        } catch (error) {
            console.error("Erro ao atualizar user:", error);
        }
    };

    const handleDelete = async () => {
        try {
            const userId = await fetchUserId();
            const response = await conn.delete(`/partners/${userId}`, {
                data: { userType: "consultor" }, // Incluí o corpo da solicitação com o tipo de usuário
            });
            navigation.goBack();
            setModalMessage("Parceiro excluído com sucesso!");
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
            <View style={stylesFormEditParc.loadingContainer}>
                <ActivityIndicator
                    size="large"
                    color={Styles.colors.vermelho}
                />
            </View>
        );
    }

    return (
        <View style={stylesFormEditParc.container}>
            {/* Container Formulário */}
            <View
                style={[
                    stylesFormEditParc.formContainer,
                    { width: windowWidth },
                ]}
            >
                <View style={stylesFormEditParc.inputContainer}>
                    <TextInput
                        style={stylesFormEditParc.input}
                        placeholder="Nome"
                        onChangeText={(text) => setNome(text)}
                        value={nome}
                    />
                    {renderPencilButton()}
                </View>
                <View style={stylesFormEditParc.inputContainer}>
                    <TextInput
                        style={stylesFormEditParc.input}
                        placeholder="Email"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        keyboardType="email-address"
                    />
                    {renderPencilButton()}
                </View>
                <View style={stylesFormEditParc.inputContainer}>
                    <TextInput
                        style={stylesFormEditParc.input}
                        placeholder="***********"
                        editable={false}
                    />
                </View>
                <TouchableOpacity onPress={handleDelete}>
                    <Text style={stylesFormEditParc.delete}>Excluir</Text>
                </TouchableOpacity>
                <ButtonSmall button="Salvar" onPress={handlePress} />
            </View>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={stylesFormEditParc.modalOverlay}>
                    <View style={stylesFormEditParc.modalContainer}>
                        <FontAwesome
                            name={modalIcon}
                            size={40}
                            color={modalIconColor}
                            style={stylesFormEditParc.modalIcon}
                        />
                        <Text style={stylesFormEditParc.modalText}>
                            {modalMessage}
                        </Text>
                        <TouchableOpacity
                            style={stylesFormEditParc.modalButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={stylesFormEditParc.modalButtonText}>
                                OK
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default FormEditParc;