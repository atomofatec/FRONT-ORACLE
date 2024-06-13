import React, { useState } from "react";
import {
    View,
    TextInput,
    Dimensions,
    Text,
    TouchableOpacity,
    Modal,
} from "react-native";
import stylesForm from "./form.styles";
import { ButtonSmall } from "../../common/buttonSmall";
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

export function FormCadParc({ onAddUser }) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

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
            setModalMessage("Por favor, preencha todos os campos.");
            setModalVisible(true);
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
                <TouchableOpacity onPress={handleGeneratePassword}>
                    <Text style={stylesForm.forgotPassword}>Gerar senha</Text>
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
                <View style={stylesForm.modalOverlay}>
                    <View style={stylesForm.modalContainer}>
                        <FontAwesome
                            name="exclamation-circle"
                            size={40}
                            color={Styles.colors.vermelho}
                            style={stylesForm.modalIcon}
                        />
                        <Text style={stylesForm.modalText}>{modalMessage}</Text>
                        <TouchableOpacity
                            style={stylesForm.modalButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={stylesForm.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default FormCadParc;