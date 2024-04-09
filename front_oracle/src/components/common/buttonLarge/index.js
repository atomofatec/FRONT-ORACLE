import React from "react";
import { TouchableOpacity, Text } from "react-native";
import stylesButtonLarge from "./buttonLarge.styles";

export function ButtonLarge({ button, handlePress }) {
    return (
        <TouchableOpacity style={stylesButtonLarge.button} onPress={handlePress}>
            <Text style={stylesButtonLarge.buttonText}>{button}</Text>
        </TouchableOpacity>
    );
}