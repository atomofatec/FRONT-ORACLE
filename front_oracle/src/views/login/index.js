import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import * as Components from "../../components/index";
import stylesLogin from "./login.styles";

export function Login({ onLogin }) {
    const windowWidth = Dimensions.get("window").width;
    const [email, setEmail] = useState(""); // Estado para armazenar o email digitado
    const [password, setPassword] = useState(""); // Estado para armazenar a senha digitada

    // Função que receberá o email e a senha digitados e chamará a função de login do componente pai
    const handleLogin = () => {
        onLogin(email, password);
    };

    // Função para atualizar o estado do email
    const handleEmailChange = (text) => {
        setEmail(text);
    };

    // Função para atualizar o estado da senha
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
                <Components.Button button="ENTRAR" handlePress={handleLogin} />
            </View>
        </View>
    );
}