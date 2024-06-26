import {
    View,
    Dimensions,
    SafeAreaView,
    ScrollView,
    Modal,
    Text,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import * as Components from "../../components/index";
import stylesRecuperarSenha from "./RecuperarSenha.style";
import Connection from "../../connection";
import { useNavigation } from "@react-navigation/native";
import * as Styles from "../../styles/index";
import { FontAwesome } from "@expo/vector-icons";

export function RecuperarSenha() {
    const conn = Connection();
    const navigation = useNavigation();
    const windowWidth = Dimensions.get("window").width;
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalIcon, setModalIcon] = useState("");
    const [modalIconColor, setModalIconColor] = useState("");

    const sendEmail = async (emailData) => {
        try {
            const response = await conn.post("/password-reset-request", {
                email: emailData.email,
            });
            setModalMessage("Email de validação enviado!");
            setModalIcon("check-circle");
            setModalIconColor(Styles.colors.vermelho);
            setModalVisible(true);
            console.log(response);
            navigation.navigate("AlterarSenha");
        } catch (error) {
            console.error("Error:", error);
            if (error.response) {
                setModalMessage(`Erro: ${error.response.data}`);
                setModalIcon("times-circle");
                setModalIconColor(Styles.colors.vermelho);
                console.error("Status Code:", error.response.status);
                console.error("Error Data:", error.response.data);
            } else {
                setModalMessage("Não foi possível enviar o email.");
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
                    <Components.FormRecuperar sendEmail={sendEmail} />
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
