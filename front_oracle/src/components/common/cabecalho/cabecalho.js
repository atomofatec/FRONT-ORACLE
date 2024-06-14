import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    Modal,
    TouchableWithoutFeedback,
    StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import stylesCabecalho from "./cabecalho.styles";
import * as Styles from "../../../styles/index";
import { useNavigation } from "@react-navigation/native";

export function Cabecalho({ titulo }) {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const openMenu = () => setModalVisible(true);
    const closeMenu = () => setModalVisible(false);

    const navigateToProfile = () => {
        closeMenu();
        navigation.navigate("EditarUser");
    };

    const handleLogout = () => {
        closeMenu();
        navigation.navigate("Login");
    };

    return (
        <SafeAreaView style={stylesCabecalho.container}>
            <View style={stylesCabecalho.logoContainer}>
                <Image
                    source={require("../../../assets/imgs/logo_Oracle_branco.png")}
                    style={{ width: 82, height: 51 }}
                />
                <Text style={stylesCabecalho.tituloPag}>{titulo}</Text>
            </View>
            <TouchableOpacity onPress={openMenu}>
                <Ionicons
                    name="person-circle"
                    size={40}
                    color={Styles.colors.brancoFundo}
                />
            </TouchableOpacity>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeMenu}
            >
                <TouchableWithoutFeedback onPress={closeMenu}>
                    <View style={stylesCabecalho.modalOverlay} />
                </TouchableWithoutFeedback>
                <View style={stylesCabecalho.modalContent}>
                    <TouchableOpacity onPress={navigateToProfile} style={stylesCabecalho.menuItem}>
                        <Text style={stylesCabecalho.menuItemText}>Meu Perfil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleLogout} style={stylesCabecalho.menuItem}>
                        <Text style={stylesCabecalho.menuItemText}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView>
    );
}