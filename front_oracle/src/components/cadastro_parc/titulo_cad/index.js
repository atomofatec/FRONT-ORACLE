import React from "react";
import { View, Text } from "react-native";
import stylesTitulo from "./titulo.styles";


export function Titulo() {
    
    return (
        <View>
          <View style={stylesTitulo.containerTitle}>
                <Text style={stylesTitulo.texto}>
                    Cadastro de Parceiros
                </Text>
            </View>
        </View>
    );
}