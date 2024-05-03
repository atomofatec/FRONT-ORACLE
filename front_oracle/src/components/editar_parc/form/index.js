import React, { useEffect, useState } from "react";
import { View, TextInput, Dimensions, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import stylesFormEditParc from "./formEditParc.styles";
import { Ionicons } from "@expo/vector-icons";
import { ButtonSmall } from "../../common/buttonSmall";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Styles from "../../../styles"
import Connection from "../../../connection";

export function FormEditParc() {
    const [type, setType] = useState("parceiro");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isToggleButtonOn, setToggleButtonOn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);
    const conn = Connection();

    const user_id = AsyncStorage.getItem("user_id");
    console.log(user_id);

    const windowWidth = Dimensions.get("window").width;

    const renderPencilButton = () => {
        return (
            <TouchableOpacity onPress={() => console.log("Pressed pencil button")}>
                <Ionicons name="pencil" size={18} color="#C74634" />
            </TouchableOpacity>
        );
    };

    const toggleButtonPress = () => {
        setToggleButtonOn(!isToggleButtonOn);
    };

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await conn.get(`/${user_id}`);
                setUser(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        }
        fetchUsers();
    }, []);

    if (loading) {
        return (
            <View style={stylesFormEditParc.loadingContainer}>
                <ActivityIndicator size="large" color={Styles.colors.vermelho} />
            </View>
        );
    }


    return (
        <View style={stylesFormEditParc.container}>
            {/* Container Formulário */}
            <View style={[stylesFormEditParc.formContainer, { width: windowWidth }]}>
                <View style={stylesFormEditParc.inputContainer}>
                    <TextInput
                        style={stylesFormEditParc.input}
                        placeholder="Nome"
                        onChangeText={(text) => setNome(text)}
                        value={nome}
                    />
                    {renderPencilButton()}
                </View>
                <View style={stylesFormEditParc.inputContainer}>
                    <TextInput
                        style={stylesFormEditParc.input}
                        placeholder="Email"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        keyboardType="email-address"
                    />
                    {renderPencilButton()}
                </View>
                <View style={stylesFormEditParc.inputContainer}>
                    <TextInput
                        style={stylesFormEditParc.input}
                        placeholder="Senha"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={!showPassword}
                    />
                    {renderPencilButton()}
                </View>
                <View style={stylesFormEditParc.rowContainer}>
                    <Text style={stylesFormEditParc.delete}>Excluir</Text>
                    <Text style={stylesFormEditParc.password}>Gerar senha</Text>
                </View>
                {/* Toggle Button */}
                <View style={stylesFormEditParc.toggleButtonContainer}>
                    <Text style={stylesFormEditParc.beneficios}>Benefícios</Text>
                    <TouchableOpacity
                        style={[
                            stylesFormEditParc.toggleButton,
                            isToggleButtonOn && stylesFormEditParc.toggleButtonActive,
                        ]}
                        onPress={toggleButtonPress}
                    >
                        <View
                            style={[
                                stylesFormEditParc.toggleInner,
                                isToggleButtonOn && stylesFormEditParc.toggleInnerActive,
                            ]}
                        />
                    </TouchableOpacity>
                    <Text style={stylesFormEditParc.apto}>O parceiro estará apto {'\n'} a receber benefícios!</Text>
                </View>
                <ButtonSmall button="Salvar" />
            </View>
        </View>
    );
}

export default FormEditParc;
