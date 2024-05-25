import React, { useState, useEffect } from "react";
import {
    View,
    TextInput,
    Dimensions,
    Text,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import stylesFormEditarAdm from "./formAdm.styles";
import { Ionicons } from "@expo/vector-icons";
import { ButtonSmall } from "../../common/buttonSmall";
import Connection from "../../../connection";
import * as Styles from "../../../styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export function FormEditarAdm() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [admID, setAdmID] = useState(null);
    const conn = Connection();
    const navigation = useNavigation();

    const windowWidth = Dimensions.get("window").width;

    const fetchAdmID = async () => {
        try {
            const id = await AsyncStorage.getItem("adm_id");
            console.log("Fetched adm_id: ", id);
            return id;
        } catch (error) {
            console.error("Error retrieving adm_id:", error);
            return null;
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () => {
                setLoading(true); // Set loading to true when data fetching starts
                const id = await fetchAdmID();
                setAdmID(id);
                if (id) {
                    try {
                        const response = await conn.get(`/partner/${id}`);
                        if (response && response.data) {
                            setNome(response.data.user_name || "");
                            setEmail(response.data.email || "");
                        } else {
                            console.error("Invalid response structure", response);
                        }
                    } catch (error) {
                        console.error("Error fetching user:", error);
                    }
                } else {
                    console.error("adm_id not found");
                }
                setLoading(false); // Set loading to false when data fetching ends
            };
            fetchData();

            return () => {
                setNome("");
                setEmail("");
                setPassword("");
                setAdmID(null);
            };
        }, [])
    );

    const updateUserData = async () => {
        if (!admID) {
            alert("ID do administrador não encontrado.");
            return;
        }
        setLoading(true);
        try {
            console.log(`Attempting to update user with ID: ${admID}`);
            const response = await conn.put(`/partner/${admID}`, {
                user_name: nome,
                email: email,
            });
            console.log("User atualizado:", response.data);
            alert("Dados atualizados!");
        } catch (error) {
            console.error("Error updating user data:", error);
            alert(`Erro ao atualizar dados! Status code: ${error.response?.status || 'unknown'}`);
        } finally {
            setLoading(false);
        }
    };    

    const renderPencilButton = () => {
        return (
            <TouchableOpacity onPress={() => console.log("Pressed pencil button")}>
                <Ionicons name="pencil" size={18} color="#C74634" />
            </TouchableOpacity>
        );
    };

    const handlePress = async () => {
        try {
            const admID = await fetchAdmID();
            const response = await conn.put(`/partners/${admID}`, {
                name: nome,
                email: email,
            });
            console.log("User atualizado:", response.data);
            alert("Usuário atualizado com sucesso!");
        } catch (error) {
            console.error("Erro ao atualizar user:", error);
        }
    };

    const handleDelete = async () => {
        try {
            const response = await conn.delete(`/partners/${admID}`, {
                data: { userType: "consultor" }, // Incluí o corpo da solicitação com o tipo de usuário
            });
            navigation.goBack();
            alert("Usuário excluído com sucesso!");
            console.log("User deletado:", response.data);
        } catch (error) {
            console.error("Erro ao deletar user:", error);
        }
    };

    if (loading) {
        return (
            <View style={stylesFormEditarAdm.loadingContainer}>
                <ActivityIndicator size="large" color={Styles.colors.vermelho} />
            </View>
        );
    }

    return (
        <View style={stylesFormEditarAdm.container}>
            <View style={[stylesFormEditarAdm.formContainer, { width: windowWidth }]}>
                <View style={stylesFormEditarAdm.inputContainer}>
                    <TextInput
                        style={stylesFormEditarAdm.input}
                        placeholder="Nome"
                        onChangeText={(text) => setNome(text)}
                        value={nome}
                    />
                    {renderPencilButton()}
                </View>
                <View style={stylesFormEditarAdm.inputContainer}>
                    <TextInput
                        style={stylesFormEditarAdm.input}
                        placeholder="Email"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        keyboardType="email-address"
                    />
                    {renderPencilButton()}
                </View>
                <View style={stylesFormEditarAdm.inputContainer}>
                    <TextInput
                        style={stylesFormEditarAdm.input}
                        placeholder="********"
                        editable={false}
                    />
                </View>
                <View style={stylesFormEditarAdm.rowContainer}>
                    <TouchableOpacity onPress={handleDelete} style={stylesFormEditarAdm.delete}>
                        <Text style={stylesFormEditarAdm.texto}>Excluir</Text>
                    </TouchableOpacity>
                </View>
                <ButtonSmall button="Salvar" onPress={handlePress} />
            </View>
        </View>
    );
}

export default FormEditarAdm;
