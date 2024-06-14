import {
    View,
    Dimensions,
    SafeAreaView,
    ScrollView,
    Modal,
    Text,
    TouchableOpacity,
} from "react-native";
import * as Components from "../../components/index";
import stylesRecuperarSenha from "./RecuperarSenha.style";
import Connection from "../../connection";
import { FontAwesome } from "@expo/vector-icons";
import * as Styles from "../../styles/index";
import React, { useState } from "react";

export function AlterarSenha() {
    const conn = Connection();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalIcon, setModalIcon] = useState("");
    const [modalIconColor, setModalIconColor] = useState("");
    const windowWidth = Dimensions.get("window").width;

    const alterarSenha = async (alterarSenhaData) => {
        console.log(alterarSenhaData);
        try {
            const response = await conn.post("/reset-password", {
                token: alterarSenhaData.token,
                newPassword: alterarSenhaData.novaSenha,
            });
            setModalMessage("Senha alterada com sucesso!");
            setModalIcon("check-circle");
            setModalIconColor(Styles.colors.vermelho);
            setModalVisible(true);
            console.log(response);
        } catch (error) {
            console.error("Error:", error);
            if (error.response) {
                setModalMessage(`Erro: ${error.response.data}`);
                setModalIcon("times-circle");
                setModalIconColor(Styles.colors.vermelho);
                console.error("Status Code:", error.response.status);
                console.error("Error Data:", error.response.data);
            } else {
                setModalMessage("Erro ao alterar senha.");
                setModalIcon("times-circle");
                setModalIconColor(Styles.colors.vermelho);
            }
            setModalVisible(true);
        }
    };

    return (
            <View style={stylesRecuperarSenha.container}>
                <Components.CabecalhoLogin />
                <View
                    style={[
                        stylesRecuperarSenha.formContainer,
                        { width: windowWidth },
                    ]}
                >
                    <Components.TituloVoltar title="RECUPERE SUA SENHA" />
                    <Components.FormAlterarSenha alterarSenha={alterarSenha} />
                </View>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={stylesRecuperarSenha.modalOverlay}>
                    <View style={stylesRecuperarSenha.modalContainer}>
                        <FontAwesome
                            name={modalIcon}
                            size={40}
                            color={modalIconColor}
                            style={stylesRecuperarSenha.modalIcon}
                        />
                        <Text style={stylesRecuperarSenha.modalText}>
                            {modalMessage}
                        </Text>
                        <TouchableOpacity
                            style={stylesRecuperarSenha.modalButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={stylesRecuperarSenha.modalButtonText}>
                                OK
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            </View>
    );
}
