import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import stylesForm from "./form.styles";
import { useFocusEffect } from "@react-navigation/native"; // Importe o useFocusEffect

export function Form({ onEmailChange, onPasswordChange }) {
    const [email, setEmail] = useState(""); // Estado para armazenar o email digitado
    const [password, setPassword] = useState(""); // Estado para armazenar a senha digitada
    const [showPassword, setShowPassword] = useState(false); // Estado para controlar a exibição da senha

    // Função para atualizar o estado do email
    const handleEmailChange = (text) => {
        setEmail(text);
        onEmailChange(text); // Notifica o componente pai sobre a mudança de email
    };

    // Função para atualizar o estado da senha
    const handlePasswordChange = (text) => {
        setPassword(text);
        onPasswordChange(text); // Notifica o componente pai sobre a mudança de senha
    };

    // Define um listener para o evento de foco da tela
    useFocusEffect(
        React.useCallback(() => {
            // Função de limpeza ao sair da tela
            return () => {
                setEmail(""); // Limpa o estado do email
                setPassword(""); // Limpa o estado da senha
            };
        }, [])
    );

    return (
        <View style={stylesForm.formcontainer}>
            <View style={stylesForm.inputContainer}>
                <TextInput
                    style={stylesForm.input}
                    placeholder="Email"
                    onChangeText={handleEmailChange}
                    value={email}
                    keyboardType="email-address"
                />
            </View>
            <View style={stylesForm.inputContainer}>
                <TextInput
                    style={stylesForm.input}
                    placeholder="Senha"
                    onChangeText={handlePasswordChange}
                    value={password}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                    style={stylesForm.eyeIcon}
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <FontAwesome
                        name={showPassword ? "eye" : "eye-slash"}
                        size={20}
                        color="#C0C0C0"
                    />
                </TouchableOpacity>
            </View>
            <Text style={stylesForm.forgotPassword}>Esqueci minha senha</Text>
        </View>
    );
}