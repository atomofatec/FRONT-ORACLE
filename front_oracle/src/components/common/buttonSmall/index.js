import React from "react";
import { TouchableOpacity, Text } from "react-native";
import stylesButtonSmall from "./buttonSmall.styles";

export function ButtonSmall({ button, onPress }) {
    return (
        <TouchableOpacity style={stylesButtonSmall.button} onPress={onPress}>
            <Text style={stylesButtonSmall.buttonText}>{button}</Text>
        </TouchableOpacity>
    );
}