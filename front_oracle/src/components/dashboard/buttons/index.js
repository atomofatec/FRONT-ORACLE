import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Styles from "../../../styles/index";
import stylesButtons from "./buttons.styles";

export function Buttons({ texto, selecionado, onClick, icone }) {
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
                stylesButtons.botao,
                {
                    // Altera a cor de fundo do botão de acordo com a propriedade selecionada
                    backgroundColor: selecionado
                        ? Styles.colors.vermelho
                        : "transparent",
                },
            ]}
        >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {icone && (
                    <Ionicons
                        name={icone}
                        size={20} // Tamanho do ícone
                        style={{ marginRight: 5 }} // espaçamento
                        color={
                            selecionado
                                ? Styles.colors.brancoFundo
                                : Styles.colors.vermelho
                        } // Cor do ícone
                    />
                )}
                <Text
                    style={[
                        stylesButtons.texto,
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
            </View>
        </TouchableOpacity>
    );
}