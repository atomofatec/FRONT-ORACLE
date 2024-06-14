import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import * as Components from "../../components/index";
import stylesTracks from "./Tracks.styles";
import { useNavigation } from "@react-navigation/native";

export function Tracks() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={stylesTracks.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Consultor" />
                <View style={stylesTracks.container}>
                    <Components.SubTituloVoltar titulo="Program Tracks" />
                    <Components.Tracks />
                    <TouchableOpacity
                    style={stylesTracks.editar}
                        onPress={() => navigation.navigate("EditarParc")}
                    >
                        <Text style={stylesTracks.texto}>Editar Parceiro</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}