import React, { useState } from "react";
import { View, TextInput, Dimensions, Text } from "react-native";
import stylesForm from "./form_cad.styles";

export function Formulario() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={stylesForm.container}>
            {/* Container Formulário */}
            <View style={[stylesForm.formContainer, { width: windowWidth }]}>
                <View style={stylesForm.inputContainer}>
                    <TextInput
                        style={stylesForm.input}
                        placeholder="Nome"
                        placeholderTextColor="#C74634" // Definindo a cor do placeholder
                        onChangeText={(text) => setNome(text)}
                        value={nome}
                    />
                </View>
                <View style={stylesForm.inputContainer}>
                    <TextInput
                        style={stylesForm.input}
                        placeholder="Email"
                        placeholderTextColor="#C74634" // Definindo a cor do placeholder
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        keyboardType="email-address"
                    />
                </View>
                <View style={stylesForm.inputContainer}>
                    <TextInput
                        style={stylesForm.input}
                        placeholder="Senha"
                        placeholderTextColor="#C74634" // Definindo a cor do placeholder
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={!showPassword}
                    />
                </View>
                <Text style={stylesForm.forgotPassword}>Gerar senha</Text>
            </View>
        </View>
    );
}

export default Formulario;
