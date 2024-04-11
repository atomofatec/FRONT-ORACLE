import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import * as Components from "../../components/index";
import stylesLogin from "./login.styles";
import mockedUsers from "../../utils/mocks";
import { useNavigation } from "@react-navigation/native";

export function Login() {
    const windowWidth = Dimensions.get("window").width;
    const [email, setEmail] = useState(""); // Estado para armazenar o email digitado
    const [password, setPassword] = useState(""); // Estado para armazenar a senha digitada
    const [userType, setUserType] = useState(null);
    const navigation = useNavigation();

    // Função que receberá o email e a senha digitados e chamará a função de login do componente pai
    const handleLogin = () => {
        // Verificando o login com base na lista mockada de usuários
        const user = mockedUsers.find(
            (user) => user.email === email && user.password === password
        );
        if (user) {
            if (user.type === "administrador") {
                navigation.navigate("Admin");
            } else if (user.type === "funcionário") {
                navigation.navigate("Func");
            } else {
                alert("Não foi possível logar.");
            }
        } else {
            alert("Credenciais inválidas.");
        }
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
                <Components.ButtonLarge
                    button="ENTRAR"
                    handlePress={handleLogin}
                />
            </View>
        </View>
    );
}