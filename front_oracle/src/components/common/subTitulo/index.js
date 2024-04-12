import React from "react";
import { Text, Dimensions, View, TouchableOpacity } from "react-native";
import stylesSubTitulo from "./subTitulo.styles";

const windowWidth = Dimensions.get("window").width;

export function SubTitulo({ titulo, subTitulo, isToggleButtonOn, onToggle }) {
    return (
        <View style={[stylesSubTitulo.formContainer, { width: windowWidth }]}>
            <View>
                <Text style={stylesSubTitulo.title}>
                    {isToggleButtonOn ? "Cadastro de" : titulo}
                    {"\n"}
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