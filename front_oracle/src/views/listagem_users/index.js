import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Components from "../../components/index";
import stylesListagem from "./stylesListagemUsers";

export function ListagemUsers() {
    return (
        <SafeAreaView style={stylesListagem.background}>
            <ScrollView>
                <Components.Cabecalho />
                <Text>Lista de Usuários</Text>
            </ScrollView>
        </SafeAreaView>
    );
}