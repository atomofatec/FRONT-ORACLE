import React, { useState } from "react";
import { View, TextInput, Dimensions, Text } from "react-native";
import stylesFormCad from "./form.styles";
import { ButtonSmall } from "../../common/buttonSmall";
import { SubTitulo } from "../../common/subTitulo";

export function FormCad({ onAddUser }) {
    const [type, setType] = useState("funcionário");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isToggleButtonOn, setToggleButtonOn] = useState(false);

    const windowWidth = Dimensions.get("window").width;

    const handleToggle = () => {
        setToggleButtonOn(!isToggleButtonOn);
        setType(isToggleButtonOn ? "funcionário" : "admin");
    };
    console.log("Tipo de usuário:", type);
    console.log("Estado do botão:", isToggleButtonOn);

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
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={!showPassword}
                    />
                </View>
                <Text style={stylesFormCad.forgotPassword}>Gerar senha</Text>
                <ButtonSmall button="Cadastrar" onPress={handleAddUser} />
            </View>
        </View>
    );
}