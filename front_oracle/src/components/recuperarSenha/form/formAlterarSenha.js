import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Modal } from "react-native";
import stylesFormRecuperar from "./formRecuperar.styles";
import { useNavigation } from "@react-navigation/native";
import { ButtonLarge } from "../../common/buttonLarge";
import { FontAwesome } from "@expo/vector-icons";
import * as Styles from "../../../styles/index";

export function FormAlterarSenha({ alterarSenha }) {
    const [token, setToken] = useState(""); // Estado para armazenar o token digitado
    console.log(token);
    const [novaSenha, setNovaSenha] = useState(""); // Estado para armazenar a nova senha
    console.log(novaSenha);
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleChangePassword = () => {
        if (token && novaSenha) {
            const alterarSenhaData = {
                token: token,
                novaSenha: novaSenha,
            };
            alterarSenha(alterarSenhaData);
            navigation.navigate("Login");
        } else {
            setModalMessage("Por favor, preencha todos os campos.");
            setModalVisible(true);
        }
    };

    return (
            <View style={stylesFormRecuperar.formcontainer}>
                <Text style={stylesFormRecuperar.texto}>
                    Insira o token recebido no email.
                </Text>
                <View style={stylesFormRecuperar.inputContainer}>
                    <TextInput
                        style={stylesFormRecuperar.input}
                        placeholder="Token"
                        onChangeText={setToken}
                        value={token}
                        keyboardType="default"
                    />
                </View>
                <View style={stylesFormRecuperar.inputContainer}>
                    <TextInput
                        style={stylesFormRecuperar.input}
                        placeholder="Nova Senha"
                        value={novaSenha}
                        onChangeText={setNovaSenha}
                        keyboardType="default"
                    />
                </View>
                <ButtonLarge
                    button="ENVIAR"
                    handlePress={handleChangePassword}
                />
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={stylesFormRecuperar.modalOverlay}>
                    <View style={stylesFormRecuperar.modalContainer}>
                        <FontAwesome
                            name="exclamation-circle"
                            size={40}
                            color={Styles.colors.vermelho}
                            style={stylesFormRecuperar.modalIcon}
                        />
                        <Text style={stylesFormRecuperar.modalText}>
                            {modalMessage}
                        </Text>
                        <TouchableOpacity
                            style={stylesFormRecuperar.modalButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={stylesFormRecuperar.modalButtonText}>
                                OK
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            </View>
    );
}
