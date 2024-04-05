import React from "react";
import { Text, Dimensions, View } from "react-native";
import stylesSubTitulo from "./subTitulo.styles";

const windowWidth = Dimensions.get('window').width;

export function SubTitulo({ titulo, subTitulo }) {

    return (
    
    <View style={[stylesSubTitulo.formContainer, { width: windowWidth }]}>
         <Text style={stylesSubTitulo.title}>{titulo}{"\n"}{subTitulo}</Text>
    </View>
                
    );
}