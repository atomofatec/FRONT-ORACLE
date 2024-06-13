import React, { useState } from "react";
import {
    View,
    SafeAreaView,
    ScrollView,
    Modal,
    Text,
    TouchableOpacity,
} from "react-native";
import * as Components from "../../components/index";
import stylesCadastro from "./Cadastro.styles";
import Connection from "../../connection";
import { FontAwesome } from "@expo/vector-icons";
import * as Styles from "../../styles/index";

export function Cadastro() {
    const conn = Connection();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalIcon, setModalIcon] = useState("");
    const [modalIconColor, setModalIconColor] = useState("");

    const onAddUser = async (newUser) => {
        try {
            const response = await conn.post("/cadastro", {
                user_name: newUser.name,
                email: newUser.email,
                password: newUser.password,
                type: newUser.type,
                benefits: false,
                userType: "admin",
            });
            setModalMessage("Usuário cadastrado com sucesso!");
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
                setModalMessage("Erro ao cadastrar usuário.");
                setModalIcon("times-circle");
                setModalIconColor(Styles.colors.vermelho);
            }
            setModalVisible(true);
        }
    };

    return (
        <SafeAreaView style={stylesCadastro.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Administrador" />
                <View style={stylesCadastro.container}>
                    <Components.FormCad onAddUser={onAddUser} />
                </View>
            </ScrollView>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={stylesCadastro.modalOverlay}>
                    <View style={stylesCadastro.modalContainer}>
                        <FontAwesome
                            name={modalIcon}
                            size={40}
                            color={modalIconColor}
                            style={stylesCadastro.modalIcon}
                        />
                        <Text style={stylesCadastro.modalText}>
                            {modalMessage}
                        </Text>
                        <TouchableOpacity
                            style={stylesCadastro.modalButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={stylesCadastro.modalButtonText}>
                                OK
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}