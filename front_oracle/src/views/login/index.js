import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Dimensions, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // Chama a função onLogin com o email fornecido
        onLogin(email);
    };

    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image
                source={require('../../../assets/imgs/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            {/* Container Formulário */}
            <View style={[styles.formContainer, { width: windowWidth }]}>
                <Text style={styles.title}>LOGIN</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <FontAwesome name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#C0C0C0" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#C74634',
    },
    logo: {
        width: '100%',
        height: 100,
        marginTop: 50,
        marginBottom: 30,
    },
    formContainer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: 30,
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginTop: 50,
        marginBottom: 50,
        color: "#C74634",
    },
    inputContainer: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#BDBDBD",
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        paddingVertical: 8,
        fontSize: 16,
    },
    eyeIcon: {
        padding: 10,
    },
    forgotPassword: {
        color: "#B1B1B1",
        marginBottom: 20,
        alignSelf: "flex-end",
    },
    button: {
        marginTop: 50,
        backgroundColor: "#C74634",
        paddingVertical: 12,
        borderRadius: 20,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
});
