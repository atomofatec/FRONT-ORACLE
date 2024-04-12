import React, { useState } from "react";
import { View, TextInput, Dimensions, Text } from "react-native";
import stylesForm from "./form.styles";
import { ButtonSmall } from "../../common/buttonSmall";

export function FormCadParc({ onAddUser }) {
    const [type, setType] = useState("parceiro");
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
                <Text style={stylesForm.forgotPassword}>Gerar senha</Text>
                <ButtonSmall button="Cadastrar" onPress={handleAddUser} />
            </View>
        </View>
    );
}

export default FormCadParc;