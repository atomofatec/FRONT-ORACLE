import React, { useState } from "react";
import { View, TextInput, Dimensions, Text, TouchableOpacity } from "react-native";
import stylesFormCad from "./form.styles";
import { ButtonSmall } from "../../common/buttonSmall";
import { SubTitulo } from "../../common/subTitulo";

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

export function FormCad({ onAddUser }) {
    const [type, setType] = useState("consultor");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isToggleButtonOn, setToggleButtonOn] = useState(false);

    const windowWidth = Dimensions.get("window").width;

    const handleToggle = () => {
        setToggleButtonOn(!isToggleButtonOn);
        setType(isToggleButtonOn ? "consultor" : "admin");
    };
    console.log("Tipo de usuário:", type);
    console.log("Estado do botão:", isToggleButtonOn);

    const handleGeneratePassword = () => {
        const newPassword = generateRandomPassword(11);
        setPassword(newPassword);
    };

    const handleAddUser = () => {
        if (nome && email && password) {
            const newUser = {
                name: nome,
                email: email,
                password: password,
                type: type,
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
        <View style={stylesFormCad.container}>
            <SubTitulo
                titulo="Cadastro de"
                subTitulo="Consultores"
                isToggleButtonOn={isToggleButtonOn}
                onToggle={handleToggle}
            />
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
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={!showPassword}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                    <TouchableOpacity onPress={handleGeneratePassword}>
                        <Text style={stylesFormCad.forgotPassword}>
                            Gerar senha
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style={stylesFormCad.forgotPassword}
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