import React from "react";
import { TouchableOpacity, Text } from "react-native";
import stylesButton from "./button.styles";

export function Button({ button }) {

    return (
        <TouchableOpacity style={stylesButton.button}>
            <Text style={stylesButton.buttonText}>{button}</Text>
        </TouchableOpacity>
    );
}
