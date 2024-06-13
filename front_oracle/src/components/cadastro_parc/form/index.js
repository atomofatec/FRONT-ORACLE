import React, { useState } from "react";
import { View, TextInput, Dimensions, Text, TouchableOpacity } from "react-native";
import stylesForm from "./form.styles";
import { ButtonSmall } from "../../common/buttonSmall";

// Função para gerar senha aleatória
const generateRandomPassword = (length) => {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
};

export function FormCadParc({ onAddUser }) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const windowWidth = Dimensions.get("window").width;

    const handleAddUser = () => {
        if (nome && email && password) {
            const newUser = {
                name: nome,
                email: email,
                password: password,
            };
            onAddUser(newUser);
            setNome("");
            setEmail("");
            setPassword("");
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    };

    const handleGeneratePassword = () => {
        const newPassword = generateRandomPassword(11);
        setPassword(newPassword);
    };

    return (
        <View style={stylesForm.container}>
            {/* Container Formulário */}
            <View style={[stylesForm.formContainer, { width: windowWidth }]}>
                <View style={stylesForm.inputContainer}>
                    <TextInput
                        style={stylesForm.input}
                        placeholder="Nome"
                        //placeholderTextColor="#C74634" // Definindo a cor do placeholder
                        onChangeText={(text) => setNome(text)}
                        value={nome}
                    />
                </View>
                <View style={stylesForm.inputContainer}>
                    <TextInput
                        style={stylesForm.input}
                        placeholder="Email"
                        //placeholderTextColor="#C74634" // Definindo a cor do placeholder
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        keyboardType="email-address"
                    />
                </View>
                <View style={stylesForm.inputContainer}>
                    <TextInput
                        style={stylesForm.input}
                        placeholder="Senha"
                        //placeholderTextColor="#C74634" // Definindo a cor do placeholder
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={!showPassword}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                    <TouchableOpacity onPress={handleGeneratePassword}>
                        <Text style={stylesForm.forgotPassword}>
                            Gerar senha
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style={stylesForm.forgotPassword}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "Ocultar senha" : "Mostrar senha"}
                    </Text>
                </View>
                <ButtonSmall button="Cadastrar" onPress={handleAddUser} />
            </View>
        </View>
    );
}

export default FormCadParc;