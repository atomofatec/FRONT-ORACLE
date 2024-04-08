import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import stylesForm from "./form.styles";

export function Form({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={stylesForm.formcontainer}>
            <View style={stylesForm.inputContainer}>
                <TextInput
                    style={stylesForm.input}
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    keyboardType="email-address"
                />
            </View>
            <View style={stylesForm.inputContainer}>
                <TextInput
                    style={stylesForm.input}
                    placeholder="Senha"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                    style={stylesForm.eyeIcon}
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <FontAwesome name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#C0C0C0" />
                </TouchableOpacity>
            </View>
            <Text style={stylesForm.forgotPassword}>Esqueci minha senha</Text>
        </View>
    );
}
