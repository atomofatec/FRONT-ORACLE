import React, { useState } from "react";
import {
    View,
    TextInput,
    Dimensions,
    Text,
    TouchableOpacity,
    Modal,
} from "react-native";
import stylesFormCad from "./form.styles";
import { ButtonSmall } from "../../common/buttonSmall";
import { SubTitulo } from "../../common/subTitulo";
import { FontAwesome } from "@expo/vector-icons";
import * as Styles from "../../../styles/index";

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
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const windowWidth = Dimensions.get("window").width;

    const handleToggle = () => {
        setToggleButtonOn(!isToggleButtonOn);
        setType(isToggleButtonOn ? "consultor" : "admin");
    };

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
            setModalMessage("Por favor, preencha todos os campos.");
            setModalVisible(true);
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
                    <TouchableOpacity
                        style={stylesFormCad.eyeIcon}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <FontAwesome
                            name={showPassword ? "eye" : "eye-slash"}
                            size={20}
                            color="#C0C0C0"
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleGeneratePassword}>
                    <Text style={stylesFormCad.forgotPassword}>
                        Gerar senha
                    </Text>
                </TouchableOpacity>
                <ButtonSmall button="Cadastrar" onPress={handleAddUser} />
            </View>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={stylesFormCad.modalOverlay}>
                    <View style={stylesFormCad.modalContainer}>
                        <FontAwesome
                            name="exclamation-circle"
                            size={40}
                            color={Styles.colors.vermelho}
                            style={stylesFormCad.modalIcon}
                        />
                        <Text style={stylesFormCad.modalText}>{modalMessage}</Text>
                        <TouchableOpacity
                            style={stylesFormCad.modalButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={stylesFormCad.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
