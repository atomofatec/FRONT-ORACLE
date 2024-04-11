import React from "react";
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import stylesCabecalho from "./cabecalho.styles";
import * as Styles from "../../../styles/index";
import { useNavigation } from "@react-navigation/native";

export function Cabecalho({ titulo }) {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={stylesCabecalho.container}>
            <View style={stylesCabecalho.logoContainer}>
                <Image
                    source={require("../../../assets/imgs/logo_Oracle_branco.png")}
                    style={{ width: 82, height: 51 }}
                />
                <Text style={stylesCabecalho.tituloPag}>{titulo}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Ionicons
                    name="person-circle"
                    size={40}
                    color={Styles.colors.brancoFundo}
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
}