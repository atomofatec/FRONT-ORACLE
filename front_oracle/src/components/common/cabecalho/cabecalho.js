import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import stylesCabecalho from "./cabecalho.styles";
import * as Styles from "../../../styles/index";

export function Cabecalho({ titulo }) {
    return (
        <SafeAreaView style={stylesCabecalho.container}>
            <View style={stylesCabecalho.logoContainer}>
                <Image
                    source={require("../../../assets/imgs/logo_Oracle_branco.png")}
                    style={{ width: 82, height: 51 }}
                />
                <Text style={stylesCabecalho.tituloPag}>{titulo}</Text>
            </View>
            <Ionicons
                name="person-circle"
                size={40}
                color={Styles.colors.brancoFundo}
            />
        </SafeAreaView>
    );
}