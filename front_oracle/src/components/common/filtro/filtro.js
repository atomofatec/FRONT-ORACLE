import React from "react";
import { TouchableOpacity, Text } from "react-native";
import * as Styles from "../../../styles/index";
import stylesFiltro from "./filtro.styles";

export function Filtro({ texto, selecionado, onClick }) {
    const handlePress = () => {
        onClick();
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            style={[
                stylesFiltro.botao,
                {
                    backgroundColor: selecionado
                        ? Styles.colors.vermelho
                        : "transparent",
                },
            ]}
        >
            <Text
                style={[
                    stylesFiltro.texto,
                    {
                        color: selecionado
                            ? Styles.colors.brancoFundo
                            : Styles.colors.vermelho,
                    },
                ]}
            >
                {texto}
            </Text>
        </TouchableOpacity>
    );
}