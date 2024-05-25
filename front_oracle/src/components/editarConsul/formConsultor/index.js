import React, { useState } from "react";
import {
    View,
    TextInput,
    Dimensions,
    Text,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import stylesFormConsul from "./formConsul.styles";
import { Ionicons } from "@expo/vector-icons";
import { ButtonSmall } from "../../common/buttonSmall";
import * as Styles from "../../../styles";

export function FormEditConsultor() {
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
            <View style={stylesFormConsul.loadingContainer}>
                <ActivityIndicator size="large" color={Styles.colors.vermelho} />
            </View>
        );
    }

    return (
        <View style={stylesFormConsul.container}>
            <View style={[stylesFormConsul.formContainer, { width: windowWidth }]}>
                <View style={stylesFormConsul.inputContainer}>
                    <TextInput
                        style={stylesFormConsul.input}
                        placeholder="Nome"
                        onChangeText={(text) => setNome(text)}
                        value={nome}
                    />
                    {renderPencilButton()}
                </View>
                <View style={stylesFormConsul.inputContainer}>
                    <TextInput
                        style={stylesFormConsul.input}
                        placeholder="Email"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        keyboardType="email-address"
                    />
                    {renderPencilButton()}
                </View>
                <View style={stylesFormConsul.inputContainer}>
                    <TextInput
                        style={stylesFormConsul.input}
                        placeholder="********"
                        editable={false}
                    />
                </View>
                <View style={stylesFormConsul.rowContainer}>
                    <TouchableOpacity onPress={handleDelete}>
                        <Text style={stylesFormConsul.delete}></Text>
                    </TouchableOpacity>
                    <Text style={stylesFormConsul.password}>Excluir</Text>
                </View>
                <ButtonSmall button="Salvar" onPress={handlePress} />
            </View>
        </View>
    );
}

export default FormEditConsultor;
