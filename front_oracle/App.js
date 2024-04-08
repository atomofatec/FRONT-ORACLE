import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Rotas from "./src/routes/index";
import { useFonts } from "expo-font";
import * as Views from "./src/views/index";
import mockedUsers from "./src/utils/mocks";

export default function App() {
    const [userType, setUserType] = useState(null);

    const [fontsLoaded] = useFonts({
        Inter: require("./src/styles/fonts/Inter-VariableFont_slnt,wght.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    const handleLogin = (email, password) => {
        // Verificando o login com base na lista mockada de usuários
        const user = mockedUsers.find(
            (user) => user.email === email && user.password === password
        );
        if (user) {
            setUserType(user.type); // Definindo o tipo de usuário com base no "type" do usuário encontrado
        } else {
            alert("Credenciais inválidas.");
        }
    };

    return (
        <NavigationContainer>
            {userType === "administrador" ? (
                <Rotas.RoutesAdm />
            ) : userType === "funcionário" ? (
                <Rotas.RoutesFunc />
            ) : (
                <Views.Login onLogin={handleLogin} />
            )}
        </NavigationContainer>
    );
}