import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';
import stylesQualificadores from './qualificadores.styles';

export function Qualificadores() {
    const [selectedOptions, setSelectedOptions] = useState({
        question1: []
    });

    const handleOptionChange = (questionNumber, option) => {
        setSelectedOptions(prevState => {
            const currentOptions = prevState[questionNumber];
            const isOptionSelected = currentOptions.includes(option);

            return {
                ...prevState,
                [questionNumber]: isOptionSelected
                    ? currentOptions.filter(opt => opt !== option)
                    : [...currentOptions, option],
            };
        });
    };

    return (
        <View style={stylesQualificadores.container}>
            <View style={stylesQualificadores.checkboxContainer}>
                <Text style={stylesQualificadores.texto}>Qualificador 1</Text>
                <Checkbox
                    status={selectedOptions.question1.includes('opcao1') ? 'checked' : 'unchecked'}
                    onPress={() => handleOptionChange('question1', 'opcao1')}
                />
            </View>
            <View style={stylesQualificadores.separator} />
            <View style={stylesQualificadores.checkboxContainer}>
                <Text style={stylesQualificadores.texto}>Qualificador 2</Text>
                <Checkbox
                    status={selectedOptions.question1.includes('opcao2') ? 'checked' : 'unchecked'}
                    onPress={() => handleOptionChange('question1', 'opcao2')}
                />
            </View>
            <View style={stylesQualificadores.separator} />
            <View style={stylesQualificadores.checkboxContainer}>
                <Text style={stylesQualificadores.texto}>Qualificador 3</Text>
                <Checkbox
                    status={selectedOptions.question1.includes('opcao3') ? 'checked' : 'unchecked'}
                    onPress={() => handleOptionChange('question1', 'opcao3')}
                />
            </View>
            <View style={stylesQualificadores.separator} />
            <View style={stylesQualificadores.checkboxContainer}>
                <Text style={stylesQualificadores.texto}>Qualificador 4</Text>
                <Checkbox
                    status={selectedOptions.question1.includes('opcao4') ? 'checked' : 'unchecked'}
                    onPress={() => handleOptionChange('question1', 'opcao4')}
                />
            </View>
        </View>
    );
}