import React, { useState } from "react";
import {
    View,
    TextInput,
    Dimensions,
    Text,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { ButtonSmall } from "../../common/buttonSmall";
import * as Styles from "../../../styles";
import stylesFormPerfil from "./formPerfil.styles";

export function FormEditPerfil() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const windowWidth = Dimensions.get("window").width;

    const renderPencilButton = () => {
        return (
            <TouchableOpacity onPress={() => console.log("Pressed pencil button")}>
                <Ionicons name="pencil" size={18} color="#C74634" />
            </TouchableOpacity>
        );
    };

    const handlePress = () => {
        console.log("Nome:", nome);
        console.log("Email:", email);
        alert("Dados atualizados!");
    };

    const handleDelete = () => {
        console.log("Usuário excluído");
        alert("Usuário excluído com sucesso!");
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
                    {renderPencilButton()}
                </View>
                <View style={stylesFormPerfil.inputContainer}>
                    <TextInput
                        style={stylesFormPerfil.input}
                        placeholder="Email"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        keyboardType="email-address"
                    />
                    {renderPencilButton()}
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
                    <TouchableOpacity onPress={handleDelete}>
                        <Text style={stylesFormPerfil.delete}></Text>
                    </TouchableOpacity>
                    <Text style={stylesFormPerfil.password}>Excluir</Text>
                </View>
                <ButtonSmall button="Salvar" onPress={handlePress} />
            </View>
        </View>
    );
}

export default FormEditPerfil;
