import React from "react";
import { Text, Dimensions, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import stylesTituloVoltar from "./tituloVoltar.styles";

const windowWidth = Dimensions.get("window").width;

export function TituloVoltar({ title }) {
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack(); // Função para voltar para a página anterior
    };

    return (
        <View
            style={[
                stylesTituloVoltar.formContainer,
                { width: windowWidth },
            ]}
        >
            <Text style={stylesTituloVoltar.titleText}>{title}</Text>
            <TouchableOpacity
                onPress={handleBackPress}
                style={stylesTituloVoltar.backButton}
            >
                <Ionicons name="return-up-back-outline" size={24} color="#C74634" marginTop={50} />
            </TouchableOpacity>
        </View>
    );
}