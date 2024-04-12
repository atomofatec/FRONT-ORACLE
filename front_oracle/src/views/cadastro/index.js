import { View, SafeAreaView, ScrollView, Text } from "react-native";
import * as Components from "../../components/index";
import stylesCadFunc from "./cad_funcionario.styles";
import React, { useState } from "react";
import mockedUsers from "../../utils/mocks";

export function Cadastro() {
    const handleAddUser = (newUser) => {
        mockedUsers.push(newUser);
        console.log("Novo usuário adicionado:", newUser);
    };

    return (
        <SafeAreaView style={stylesCadFunc.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Administrador" />
                <View style={stylesCadFunc.container}>
                    <Components.FormCad onAddUser={handleAddUser} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}