import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';

export function FormHardware() {
    return (
    <View style={{ padding: 20 }}>
      <Text>1.Qual dos seguintes componentes é responsável pelo processamento de dados em um computador?</Text>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="opcao1"
          status={selectedOption === 'opcao1' ? 'checked' : 'unchecked'}
          onPress={() => handleOptionChange('opcao1')}
        />
        <Text>(a)Placa de vídeo</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="opcao2"
          status={selectedOption === 'opcao2' ? 'checked' : 'unchecked'}
          onPress={() => handleOptionChange('opcao2')}
        />
        <Text>(b)CPU (Unidade de Processamento Central)</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="opcao3"
          status={selectedOption === 'opcao3' ? 'checked' : 'unchecked'}
          onPress={() => handleOptionChange('opcao3')}
        />
        <Text>(c)Disco rígido</Text>
      </View>

      <Text>2.Qual é a função principal da memória RAM em um computador?</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
            value="opcao1"
            status={selectedOption === 'opcao1' ? 'checked' : 'unchecked'}
            onPress={() => handleOptionChange('opcao1')}
        />
        <Text>(a)Armazenar permanentemente dados e programas.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
            value="opcao2"
            status={selectedOption === 'opcao2' ? 'checked' : 'unchecked'}
            onPress={() => handleOptionChange('opcao2')}
        />
        <Text>(b) Processar gráficos e imagens.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
            value="opcao3"
            status={selectedOption === 'opcao3' ? 'checked' : 'unchecked'}
            onPress={() => handleOptionChange('opcao3')}
        />
        <Text>(c)Armazenar temporariamente dados e instruções para o processador.</Text>
        </View>

        <Text>3.Qual dos seguintes dispositivos é usado principalmente para armazenar dados permanentemente em um computador?</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
            value="opcao1"
            status={selectedOption === 'opcao1' ? 'checked' : 'unchecked'}
            onPress={() => handleOptionChange('opcao1')}
        />
        <Text>(a)Disco rígido</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
            value="opcao2"
            status={selectedOption === 'opcao2' ? 'checked' : 'unchecked'}
            onPress={() => handleOptionChange('opcao2')}
        />
        <Text>(b)Memória RAM</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
            value="opcao3"
            status={selectedOption === 'opcao3' ? 'checked' : 'unchecked'}
            onPress={() => handleOptionChange('opcao3')}
        />
        <Text>(c)CPU (Unidade de Processamento Central)</Text>
        </View>

    </View>
    );
}
