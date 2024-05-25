import React from "react";
import { Text, Dimensions, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import stylesSubTituloVoltar from "./subtituloVoltar.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get("window").width;

export function SubTituloVoltar({ titulo, subTitulo }) {
    const navigation = useNavigation();

    const handleBackPress = async () => {
        try {
            console.log("Attempting to remove user_id from AsyncStorage");
            await AsyncStorage.removeItem("user_id");
            await AsyncStorage.removeItem("expertise_id");
            await AsyncStorage.removeItem("track_id");
            console.log("Successfully removed user_id");
            navigation.goBack(); // Função para voltar para a página anterior
        } catch (error) {
            console.error("Error removing user_id from AsyncStorage:", error);
        }
    };

    return (
        <View
            style={[
                stylesSubTituloVoltar.formContainer,
                { width: windowWidth },
            ]}
        >
            <Text style={stylesSubTituloVoltar.titleText}>
                {titulo} {"\n"} {subTitulo}
            </Text>
            <TouchableOpacity
                onPress={handleBackPress}
                style={stylesSubTituloVoltar.backButton}
            >
                <Ionicons
                    name="return-up-back-outline"
                    size={24}
                    color="#C74634"
                />
            </TouchableOpacity>
        </View>
    );
}