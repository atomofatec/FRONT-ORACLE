import React, { useState } from "react";
import {
    View,
    TextInput,
    Dimensions,
    Text,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import stylesFormEditarAdm from "./formAdm.styles";
import { Ionicons } from "@expo/vector-icons";
import { ButtonSmall } from "../../common/buttonSmall";
import * as Styles from "../../../styles";

export function FormEditarAdm() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
                    <TouchableOpacity onPress={handleDelete}>
                        <Text style={stylesFormEditarAdm.delete}></Text>
                    </TouchableOpacity>
                    <Text style={stylesFormEditarAdm.password}>Excluir</Text>
                </View>
                <ButtonSmall button="Salvar" onPress={handlePress} />
            </View>
        </View>
    );
}

export default FormEditarAdm;
