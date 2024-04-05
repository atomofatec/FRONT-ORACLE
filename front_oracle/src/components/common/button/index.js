import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import stylesButton from './button.styles';

export function CadastroButton({ onPress, titulo }) {
    return (                                                
        <TouchableOpacity style={stylesButton.button} onPress={onPress}>
        <Text style={stylesButton.buttonText}>{titulo}</Text>
        
        </TouchableOpacity>
    );
}
