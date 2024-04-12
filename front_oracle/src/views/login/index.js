import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import * as Components from "../../components/index";
import stylesLogin from "./login.styles";
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";

export function Login() {
    const windowWidth = Dimensions.get("window").width;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://54.145.244.191:3001/api/login', { email, password });
            // Verifica a resposta do back-end e navega para a página adequada
            if (response.data.message === "Login bem-sucedido!") {
                if (response.data.userType === "admin") {
                    navigation.navigate("Admin"); // Navegar para página de administrador
                } else if (response.data.userType === "funcionario") {
                    navigation.navigate("Func"); // Navegar para página de funcionário
                } else if (response.data.userType === "parceiro") {
                    navigation.navigate("Parceiro"); // Navegar para página de parceiro
                }
            } else {
                alert("Usuário ou senha inválidos");
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            alert("Erro ao fazer login. Por favor, tente novamente.");
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
        </View>
    );
}
