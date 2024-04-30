import React from "react";
import { Text, Dimensions, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

export function SubTituloVoltar({ subTitulo, isToggleButtonOn, onToggle, onBackPress }) {
    return (
        <View style={[stylesSubTitulo.formContainer, { width: windowWidth }]}>
            <TouchableOpacity onPress={onBackPress} style={stylesSubTitulo.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <View>
                <Text style={stylesSubTitulo.title}>
                    {isToggleButtonOn ? "Administradores" : subTitulo}
                </Text>
            </View>
            <View>
                <TouchableOpacity
                    style={[
                        stylesSubTitulo.toggleButton,
                        isToggleButtonOn && stylesSubTitulo.toggleButtonActive,
                    ]}
                    onPress={onToggle} // Use a função de retorno de chamada do pai para alterar o estado do botão
                >
                    <View
                        style={[
                            stylesSubTitulo.toggleInner,
                            isToggleButtonOn &&
                                stylesSubTitulo.toggleInnerActive,
                        ]}
                    />
                </TouchableOpacity>
                <Text style={stylesSubTitulo.titleUser}>
                    {isToggleButtonOn ? "Administrador" : "Funcionário"}
                </Text>
            </View>
        </View>
    );
}
