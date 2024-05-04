import { View, SafeAreaView, ScrollView } from "react-native";
import * as Components from "../../components/index";
import stylesCadastroParc from "./cadastro_parc.styles";
import React from "react";
import Connection from "../../connection";

export function CadastroParc() {
    const conn = Connection();

    const onAddUser = async (newUser, conn) => {
        try {
            const response = await conn.post("/registerPartner", {
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
            });
            console.log(response);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <SafeAreaView style={stylesCadastroParc.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Funcionário" />
                <View style={stylesCadastroParc.container}>
                    <Components.SubTitulo2
                        titulo="Cadastro de"
                        subTitulo="Parceiros"
                    />
                    <Components.FormCadParc
                        onAddUser={(newUser) => onAddUser(newUser, conn)}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}