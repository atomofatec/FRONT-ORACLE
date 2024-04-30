import React, { useState, useEffect } from "react";
import { View, TextInput, Dimensions, Text } from "react-native";
import stylesFormEdit from "./form.styles";
import { ButtonSmall } from "../../common/buttonSmall";


export function FormEdit({ onAddUser, onUpdateUser, onDeleteUser, partnerToEdit }) { 
    const [type, setType] = useState("funcionario");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (partnerToEdit) {
            setNome(partnerToEdit.name);
            setEmail(partnerToEdit.email);
            setPassword(partnerToEdit.password);
            setType(partnerToEdit.type);
        }
    }, [partnerToEdit]);

    const windowWidth = Dimensions.get("window").width;

    const handleEditUser = () => {
        if (nome && email && password) {
            const editedUser = {
                id: partnerToEdit.id,
                name: nome,
                email: email,
                password: password,
                type: type,
            };
            onUpdateUser(editedUser);
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    };

    const handleDeleteUser = () => {
        if (partnerToEdit) {
            onDeleteUser(partnerToEdit.id);
        }
    };

    return (
        <View style={stylesFormEdit.container}> 
            
            {/* Container Formulário */}
            <View style={[stylesFormEdit.formContainer, { width: windowWidth }]}> 
                <View style={stylesFormEdit.inputContainer}> 
                    <TextInput
                        style={stylesFormEdit.input} 
                        placeholder="Nome"
                        onChangeText={(text) => setNome(text)}
                        value={nome}
                    />
                </View>
                <View style={stylesFormEdit.inputContainer}> 
                    <TextInput
                        style={stylesFormEdit.input} 
                        placeholder="Email"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        keyboardType="email-address"
                    />
                </View>
                <View style={stylesFormEdit.inputContainer}> 
                    <TextInput
                        style={stylesFormEdit.input} 
                        placeholder="Senha"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={!showPassword}
                    />
                </View>
                <Text style={stylesFormEdit.forgotPassword}>Gerar nova senha</Text> 
                <ButtonSmall button="Salvar" onPress={handleEditUser} />
                <Text style={stylesFormEdit.forgotPassword}>Excluir</Text>
            </View>
        </View>
    );
}
