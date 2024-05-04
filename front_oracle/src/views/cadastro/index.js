import { View, SafeAreaView, ScrollView } from "react-native";
import * as Components from "../../components/index";
import stylesCadFunc from "./cad_funcionario.styles";
import React from "react";
import Connection from "../../connection";

export function Cadastro() {
    const conn = Connection();

    const onAddUser = async (newUser) => {
        try {
            const response = await conn.post("/cadastro", {
                user_name: newUser.name,
                email: newUser.email,
                password: newUser.password,
                type: newUser.type,
                benefits: false,
                userType: "admin",
            });
            console.log(response);
        } catch (error) {
            console.error("Error:", error);
            if (error.response) {
                console.error("Status Code:", error.response.status);
                console.error("Error Data:", error.response.data);
            }
        }
    };

    return (
        <SafeAreaView style={stylesCadFunc.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Administrador" />
                <View style={stylesCadFunc.container}>
                    <Components.FormCad onAddUser={onAddUser} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}