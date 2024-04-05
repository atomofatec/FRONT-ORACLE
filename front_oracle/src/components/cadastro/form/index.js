import React, { useState } from "react";
import { View, TextInput, Dimensions, Text } from "react-native";
import stylesFormCad from "./form.styles";

export function FormCad () {

    const [nome, setNome] = useState ("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={stylesFormCad.container}>
            {/* Container Formulário */}
            <View style={[stylesFormCad.formContainer, { width: windowWidth }]}>
            <View style={stylesFormCad.inputContainer}>
                    <TextInput
                        style={stylesFormCad.input}
                        placeholder="Nome"
                        onChangeText={(text) => setNome(text)}
                        value={nome}
                    />
                </View>
                <View style={stylesFormCad.inputContainer}>
                    <TextInput
                        style={stylesFormCad.input}
                        placeholder="Email"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        keyboardType="email-address"
                    />
                </View>
                <View style={stylesFormCad.inputContainer}>
                    <TextInput
                        style={stylesFormCad.input}
                        placeholder="Senha"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={!showPassword}
                    />
                </View>
                <Text style={stylesFormCad.forgotPassword}>Gerar senha</Text>
            </View>
        </View>
    );
}