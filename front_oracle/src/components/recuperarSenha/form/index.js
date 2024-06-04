    import React, { useState } from "react";
    import { View, TextInput, TouchableOpacity, Text } from "react-native";
    import stylesFormRecuperar from "./formRecuperar.styles";
    
    export function FormRecuperar() {
        const [email, setEmail] = useState(""); // Estado para armazenar o email digitado
        const [confirmEmail, setConfirmEmail] = useState(""); // Estado para armazenar o email de confirmação
    
        return (
            <View style={stylesFormRecuperar.formcontainer}>
                <Text style={stylesFormRecuperar.texto}>Enviaremos um email para a troca de senha</Text>
                <View style={stylesFormRecuperar.inputContainer}>
                    <TextInput
                        style={stylesFormRecuperar.input}
                        placeholder="Email"
                        onChangeText={setEmail}
                        value={email}
                        keyboardType="email-address"
                    />
                </View>
                <View style={stylesFormRecuperar.inputContainer}>
                    <TextInput
                        style={stylesFormRecuperar.input}
                        placeholder="Confirmar Email"
                        value={confirmEmail}
                        onChangeText={setConfirmEmail}
                        keyboardType="email-address"
                    />
                </View>
            </View>
        );
    }