import React from "react";
import { TouchableOpacity, Text } from "react-native";
import * as Styles from "../../../styles/index";
import stylesFiltro from "./filtro.styles";

export function Filtro({ texto, selecionado, onClick }) {
    // Função que é chamada quando o botão é pressionado
    const handlePress = () => {
        onClick();
    };

    return (
        // Botão que chama a função handlePress
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            style={[
                stylesFiltro.botao,
                {
                    // Altera a cor de fundo do botão de acordo com a propriedade selecionada
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
                        // Altera a cor do texto do botão de acordo com a propriedade selecionada
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