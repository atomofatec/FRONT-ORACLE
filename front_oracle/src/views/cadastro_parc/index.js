import {
    View,
    SafeAreaView,
    ScrollView,
    Modal,
    Text,
    TouchableOpacity,
} from "react-native";
import * as Components from "../../components/index";
import stylesCadastroParc from "./cadastro_parc.styles";
import React, { useState } from "react";
import Connection from "../../connection";
import { FontAwesome } from "@expo/vector-icons";
import * as Styles from "../../styles/index";

export function CadastroParc() {
    const conn = Connection();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalIcon, setModalIcon] = useState("");
    const [modalIconColor, setModalIconColor] = useState("");

    const onAddUser = async (newUser, conn) => {
        try {
            const response = await conn.post("/registerPartner", {
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
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
        <SafeAreaView style={stylesCadastroParc.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Consultor" />
                <View style={stylesCadastroParc.container}>
                    <Components.SubTitulo2
                        titulo="Cadastro de"
                        subTitulo="Parceiros"
                    />
                    <Components.FormCadParc
                        onAddUser={(newUser) => onAddUser(newUser, conn)}
                    />
                </View>
            </ScrollView>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={stylesCadastroParc.modalOverlay}>
                    <View style={stylesCadastroParc.modalContainer}>
                        <FontAwesome
                            name={modalIcon}
                            size={40}
                            color={modalIconColor}
                            style={stylesCadastroParc.modalIcon}
                        />
                        <Text style={stylesCadastroParc.modalText}>
                            {modalMessage}
                        </Text>
                        <TouchableOpacity
                            style={stylesCadastroParc.modalButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={stylesCadastroParc.modalButtonText}>
                                OK
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}
