import React from "react";
import { TouchableOpacity, Text } from "react-native";
import stylesbotaoQlf from "./botao.styles";

export function BotaoQlf({ button, onPress }) {
    return (
        <TouchableOpacity style={stylesbotaoQlf.button} onPress={onPress}>
            <Text style={stylesbotaoQlf.buttonText}>{button}</Text>
        </TouchableOpacity>
    );
}