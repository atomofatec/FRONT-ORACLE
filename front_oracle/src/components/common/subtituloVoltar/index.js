import React from "react";
import { Text, Dimensions, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Importe a função useNavigation
import stylesSubTituloVoltar from "./subtituloVoltar.styles";

const windowWidth = Dimensions.get("window").width;

export function SubTituloVoltar({ titulo }) {
    const navigation = useNavigation(); // Obtenha o objeto de navegação

    const handleBackPress = () => {
        navigation.goBack(); // Função para voltar para a página anterior
    };

    return (
        <View
            style={[
                stylesSubTituloVoltar.formContainer,
                { width: windowWidth },
            ]}
        >
            <Text style={stylesSubTituloVoltar.titleText}>{titulo}</Text>
            <TouchableOpacity
                onPress={handleBackPress}
                style={stylesSubTituloVoltar.backButton}
            >
                <Ionicons name="arrow-back" size={24} color="#C74634" />
            </TouchableOpacity>
        </View>
    );
}