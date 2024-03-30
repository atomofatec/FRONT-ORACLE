import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../styles/colors";
import * as Components from "../../components/common";

export function ListagemUsers() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Components.Cabecalho />
                <Text>Lista de Usuários</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C74634",
    },
});