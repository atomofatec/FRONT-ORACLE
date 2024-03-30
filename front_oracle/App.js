import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Rotas from "./src/routes/index";
import { useFonts } from "expo-font";

export default function App() {
    const [userType, setUserType] = useState(null);

    const [fontsLoaded] = useFonts({
        Inter: require("./src/styles/fonts/Inter-VariableFont_slnt,wght.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    const handleLogin = (email) => {
        // Verifica o tipo de usuário com base no email
        if (email === "adm@email.com") {
            setUserType("admin");
        } else if (email === "func@email.com") {
            setUserType("funcionario");
        } else {
            alert("Usuário não reconhecido.");
        }
    };

    return (
        <NavigationContainer>
            {userType === "admin" ? (
                <Rotas.RoutesAdm />
            ) : userType === "funcionario" ? (
                <Rotas.RoutesFunc />
            ) : (
                <Rotas.RoutesAdm />
                // <Login onLogin={handleLogin} />
            )}
        </NavigationContainer>
    );
}