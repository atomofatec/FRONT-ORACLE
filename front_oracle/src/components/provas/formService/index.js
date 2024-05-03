import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import stylesFormService from './formsService.styles';

export function FormService() {
    const [selectedOptions, setSelectedOptions] = useState({
        question1: '',
        question2: '',
        question3: '',
    });

    const handleOptionChange = (questionNumber, option) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [questionNumber]: option,
        }));
    };

    return (
      <View style={stylesFormService.container}>
            <Text style={stylesFormService.titleUser}>1.Qual é o principal objetivo do Oracle Service?</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="opcao1"
                    status={selectedOptions.question1 === 'opcao1' ? 'checked' : 'unchecked'}
                    onPress={() => handleOptionChange('question1', 'opcao1')}
                />
                <Text>Gerenciar bancos de dados</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="opcao2"
                    status={selectedOptions.question1 === 'opcao2' ? 'checked' : 'unchecked'}
                    onPress={() => handleOptionChange('question1', 'opcao2')}
                />
                <Text>Fornecer serviços em nuvem</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="opcao3"
                    status={selectedOptions.question1 === 'opcao3' ? 'checked' : 'unchecked'}
                    onPress={() => handleOptionChange('question1', 'opcao3')}
                />
                <Text>Oferecer suporte técnico especializado</Text>
            </View>

            <Text style={stylesFormService.titleUser}>2.Qual tecnologia é usada pelo Oracle Service para garantir alta disponibilidade e escalabilidade?</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="opcao1"
                    status={selectedOptions.question2 === 'opcao1' ? 'checked' : 'unchecked'}
                    onPress={() => handleOptionChange('question2', 'opcao1')}
                />
                <Text>Machine Learning</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="opcao2"
                    status={selectedOptions.question2 === 'opcao2' ? 'checked' : 'unchecked'}
                    onPress={() => handleOptionChange('question2', 'opcao2')}
                />
                <Text>Oracle RAC (Real Application Clusters)</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="opcao3"
                    status={selectedOptions.question2 === 'opcao3' ? 'checked' : 'unchecked'}
                    onPress={() => handleOptionChange('question2', 'opcao3')}
                />
                <Text>Blockchain</Text>
            </View>

            <Text style={stylesFormService.titleUser}>3.Qual dos seguintes não é um serviço oferecido pelo Oracle Service?</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="opcao1"
                    status={selectedOptions.question3 === 'opcao1' ? 'checked' : 'unchecked'}
                    onPress={() => handleOptionChange('question3', 'opcao1')}
                />
                <Text>Oracle Social Media Platform</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="opcao2"
                    status={selectedOptions.question3 === 'opcao2' ? 'checked' : 'unchecked'}
                    onPress={() => handleOptionChange('question3', 'opcao2')}
                />
                <Text>Oracle Cloud Infrastructure</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="opcao3"
                    status={selectedOptions.question3 === 'opcao3' ? 'checked' : 'unchecked'}
                    onPress={() => handleOptionChange('question3', 'opcao3')}
                />
                <Text>Oracle Database Cloud Service</Text>
            </View>
        </View>
    );
}
