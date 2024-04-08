import React from "react";
import { TouchableOpacity, Text } from "react-native";
import stylesButton from "./button.styles";

export function Button({ button, handlePress }) {
    return (
        <TouchableOpacity style={stylesButton.button} onPress={handlePress}>
            <Text style={stylesButton.buttonText}>{button}</Text>
        </TouchableOpacity>
    );
}