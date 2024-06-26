import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Modal } from "react-native";
import stylesFormRecuperar from "./formRecuperar.styles";
import { useNavigation } from "@react-navigation/native";
import { ButtonLarge } from "../../common/buttonLarge";
import { FontAwesome } from "@expo/vector-icons";
import * as Styles from "../../../styles/index";

export function FormRecuperar({ sendEmail }) {
    const [email, setEmail] = useState(""); // Estado para armazenar o email digitado
    const [confirmEmail, setConfirmEmail] = useState(""); // Estado para armazenar o email de confirmação
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleSendEmail = () => {
        if (email === confirmEmail && email && confirmEmail != "") {
            const emailData = {
                email: email,
            };
            sendEmail(emailData);
            navigation.navigate("AlterarSenha");
            console.log("Email salvo");
        } else {
            setModalMessage("Emails não conferem.");
            setModalVisible(true);
        }
    };

    return (
            <View style={stylesFormRecuperar.formcontainer}>
                <Text style={stylesFormRecuperar.texto}>
                    Enviaremos um email para a troca de senha
                </Text>
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
                <ButtonLarge button="ENVIAR" handlePress={handleSendEmail} />
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