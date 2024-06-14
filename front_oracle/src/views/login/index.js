import React, { useState } from "react";
import {
    View,
    Dimensions,
    Text,
    TouchableOpacity,
    Modal,
} from "react-native";
import * as Components from "../../components/index";
import stylesLogin from "./login.styles";
import { useNavigation } from "@react-navigation/native";
import Connection from "../../connection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import * as Styles from "../../styles/index";

export function Login() {
    const windowWidth = Dimensions.get("window").width;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const conn = Connection();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalIcon, setModalIcon] = useState("");
    const [modalIconColor, setModalIconColor] = useState("");

    const handleLogin = async () => {
        try {
            const response = await conn.post("/login", { email, password });
            // Verifica a resposta do back-end e navega para a página adequada
            // Após o login bem-sucedido
            if (response.data.message === "Login bem-sucedido!") {
                // Salva o ID do usuário na AsyncStorage
                await AsyncStorage.setItem(
                    "userID",
                    response.data.userID.toString()
                );

                if (response.data.userType === "admin") {
                    navigation.navigate("Admin"); // Navegar para página de administrador
                } else if (response.data.userType === "consultor") {
                    navigation.navigate("Func"); // Navegar para página de funcionário
                } else if (response.data.userType === "parceiro") {
                    navigation.navigate("Parc"); // Navegar para página de parceiro
                }
            } else {
                setModalMessage("Usuário ou senha inválidos");
                setModalVisible(true);
            }
        } catch (error) {
            setModalMessage("Erro ao fazer login. Por favor, tente novamente.");
            setModalVisible(true);
        }
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    return (
        <View style={stylesLogin.container}>
            <Components.CabecalhoLogin />
            <View style={[stylesLogin.formContainer, { width: windowWidth }]}>
                <Components.Title title="LOGIN" />
                <Components.Form
                    onEmailChange={handleEmailChange}
                    onPasswordChange={handlePasswordChange}
                />
                <Components.ButtonLarge
                    button="ENTRAR"
                    handlePress={handleLogin}
                />
            </View>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={stylesLogin.modalOverlay}>
                    <View style={stylesLogin.modalContainer}>
                        <FontAwesome
                            name="exclamation-circle"
                            size={40}
                            color={Styles.colors.vermelho}
                            style={stylesLogin.modalIcon}
                        />
                        <Text style={stylesLogin.modalText}>{modalMessage}</Text>
                        <TouchableOpacity
                            style={stylesLogin.modalButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={stylesLogin.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}