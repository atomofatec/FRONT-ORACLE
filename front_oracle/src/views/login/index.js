import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import * as Components from "../../components/index";
import stylesLogin from "./login.styles";
import { useNavigation } from "@react-navigation/native";
import Connection from "../../connection";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Login() {
    const windowWidth = Dimensions.get("window").width;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const conn = Connection();

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