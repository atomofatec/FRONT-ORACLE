import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import stylesbotao from './botao.styles';

export function Botao({ button, onPress }) {
    return (                                                
        <TouchableOpacity style={stylesbotao.button} onPress={onPress}>
            <Text style={stylesbotao.buttonText}>{button}</Text>
        </TouchableOpacity>
    );
}