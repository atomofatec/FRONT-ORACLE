import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, TextInput, Button, Text } from 'react-native';
import * as Components from "../../components/index";
import styles from './cad_funcionario.styles';

export function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (text) => {
        setName(text);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleSubmit = () => {
        // Aqui você pode tratar os dados do formulário, como enviá-los para um servidor
        console.log('Dados submetidos:', { name, email, password });
    };

    return (
        <SafeAreaView style={styles.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Administrador" />
                <View style={styles.container}>
                <Text style={styles.title}>Cadastro de Funcionário</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        onChangeText={handleNameChange}
                        value={name}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        onChangeText={handleEmailChange}
                        value={email}
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        onChangeText={handlePasswordChange}
                        value={password}
                        secureTextEntry={true}
                    />
                    <Button
                        title="Cadastrar"
                        onPress={handleSubmit}
                        color="#C74634"
                        style={styles.button}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
