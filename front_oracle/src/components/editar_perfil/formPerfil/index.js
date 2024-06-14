import React, { useState, useEffect } from "react";
import {
    View,
    TextInput,
    Dimensions,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Modal,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { ButtonSmall } from "../../common/buttonSmall";
import * as Styles from "../../../styles";
import stylesFormPerfil from "./formPerfil.styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

export function FormEditPerfil() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userID, setUserID] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalIcon, setModalIcon] = useState("");
    const [modalIconColor, setModalIconColor] = useState("");

    const windowWidth = Dimensions.get("window").width;

    useEffect(() => {
        const fetchUserID = async () => {
            try {
                const id = await AsyncStorage.getItem("user_id");
                setUserID(id);
                if (id) {
                    fetchUserData(id);
                }
            } catch (error) {
                console.error("Error retrieving user_id:", error);
            }
        };

        fetchUserID();
    }, []);

    const fetchUserData = async (id) => {
        setLoading(true);
        try {
            const response = await axios.get(`partner/${id}`);
            if (response.data) {
                setNome(response.data.user_name || "");
                setEmail(response.data.email || "");
            } else {
                console.error("Invalid response structure", response);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setLoading(false);
        }
    };

    const updateUserData = async () => {
        if (!userID) {
            setModalMessage("ID do usuário não encontrado.");
            setModalIcon("times-circle");
            setModalVisible(true);
            return;
        }
        setLoading(true);
        try {
            const response = await axios.put(`/partner/${userID}`, {
                user_name: nome,
                email: email,
                password: password === confirmPassword ? password : undefined,
            });
            setModalMessage("Dados atualizados com sucesso!");
            setModalIcon("check-circle");
            setModalIconColor(Styles.colors.vermelho);
            setModalVisible(true);
        } catch (error) {
            console.error("Error updating user data:", error);
            setModalMessage("Erro ao atualizar dados!");
            setModalIcon("times-circle");
            setModalVisible(true);
        } finally {
            setLoading(false);
        }
    };

    const deleteUser = async () => {
        if (!userID) {
            setModalMessage("ID do usuário não encontrado.");
            setModalIcon("times-circle");
            setModalVisible(true);
            return;
        }
        setLoading(true);
        try {
            await axios.delete(`/partners/${userID}`);
            setModalMessage("Usuário excluído com sucesso!");
            setModalIcon("check-circle");
            setModalIconColor(Styles.colors.vermelho);
            setModalVisible(true);
        } catch (error) {
            console.error("Error deleting user:", error);
            setModalMessage("Erro ao excluir usuário!");
            setModalIcon("times-circle");
            setModalVisible(true);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={stylesFormPerfil.loadingContainer}>
                <ActivityIndicator size="large" color={Styles.colors.vermelho} />
            </View>
        );
    }

    return (
        <View style={stylesFormPerfil.container}>
            <View style={[stylesFormPerfil.formContainer, { width: windowWidth }]}>
                <View style={stylesFormPerfil.inputContainer}>
                    <TextInput
                        style={stylesFormPerfil.input}
                        placeholder="Nome"
                        onChangeText={(text) => setNome(text)}
                        value={nome}
                    />
                    <TouchableOpacity onPress={() => console.log("Pressed pencil button")}>
                        <Ionicons name="pencil" size={18} color="#C74634" />
                    </TouchableOpacity>
                </View>
                <View style={stylesFormPerfil.inputContainer}>
                    <TextInput
                        style={stylesFormPerfil.input}
                        placeholder="Email"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        keyboardType="email-address"
                    />
                    <TouchableOpacity onPress={() => console.log("Pressed pencil button")}>
                        <Ionicons name="pencil" size={18} color="#C74634" />
                    </TouchableOpacity>
                </View>
                <View style={stylesFormPerfil.inputContainer}>
                    <TextInput
                        style={stylesFormPerfil.input}
                        placeholder="Senha"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity
                        style={stylesFormPerfil.eyeIcon}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <FontAwesome
                            name={showPassword ? "eye" : "eye-slash"}
                            size={20}
                            color="#C0C0C0"
                        />
                    </TouchableOpacity>
                </View>
                <View style={stylesFormPerfil.inputContainer}>
                    <TextInput
                        style={stylesFormPerfil.input}
                        placeholder="Confirmar Senha"
                        onChangeText={(text) => setConfirmPassword(text)}
                        value={confirmPassword}
                        secureTextEntry={!showConfirmPassword}
                    />
                    <TouchableOpacity
                        style={stylesFormPerfil.eyeIcon}
                        onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        <FontAwesome
                            name={showConfirmPassword ? "eye" : "eye-slash"}
                            size={20}
                            color="#C0C0C0"
                        />
                    </TouchableOpacity>
                </View>
                <View style={stylesFormPerfil.rowContainer}>
                    <TouchableOpacity onPress={deleteUser}>
                        <Text style={stylesFormPerfil.delete}>Excluir</Text>
                    </TouchableOpacity>
                </View>
                <ButtonSmall button="Salvar" onPress={updateUserData} />
            </View>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={stylesFormPerfil.modalOverlay}>
                    <View style={stylesFormPerfil.modalContainer}>
                        <FontAwesome
                            name={modalIcon}
                            size={40}
                            color={modalIconColor}
                            style={stylesFormPerfil.modalIcon}
                        />
                        <Text style={stylesFormPerfil.modalText}>
                            {modalMessage}
                        </Text>
                        <TouchableOpacity
                            style={stylesFormPerfil.modalButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={stylesFormPerfil.modalButtonText}>
                                OK
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default FormEditPerfil;
