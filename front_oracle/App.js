import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { RoutesAdm } from "./src/routes/routes_adm";
import { RoutesFunc } from "./src/routes/routes_func";
import { Login } from "./src/views/login/index";

export default function App() {
    const [userType, setUserType] = useState(null);

    const handleLogin = (email) => {
        // Verifica o tipo de usuário com base no email
        if (email === 'adm@email.com') {
            setUserType('admin');
        } else if (email === 'func@email.com') {
            setUserType('funcionario');
        } else {
            alert('Usuário não reconhecido.');
        }
    };

    return (
        <NavigationContainer>
            { userType === 'admin' ? (
                <RoutesAdm />
            ) : userType === 'funcionario' ? (
                <RoutesFunc />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </NavigationContainer>
    );
}