import React, { useState } from "react";
import { Text, Dimensions, View, TouchableOpacity } from "react-native";
import stylesSubTitulo from "./subTitulo2.styles";
 
const windowWidth = Dimensions.get('window').width;
 
export function SubTitulo2({ titulo, subTitulo }) {
    const [isToggleButtonOn, setToggleButtonOn] = useState(false); // Estado para controlar o estado do ToggleButton
 
    const handleToggle = () => {
        setToggleButtonOn(!isToggleButtonOn); // Inverte o estado do ToggleButton
    };
 
    return (
        <View style={[stylesSubTitulo.formContainer, { width: windowWidth }]}>
            <View>
                <Text style={stylesSubTitulo.title}>{isToggleButtonOn ? 'Cadastro de' : titulo}{"\n"}{isToggleButtonOn ? 'Administradores' : subTitulo}</Text>
            </View>
        </View>
    );
}