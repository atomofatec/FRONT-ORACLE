import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Components from "../../components/index";
import stylesListagem from "./stylesListagemUsers";

export function ListagemUsers() {
    const handleSearch = (term) => {
        // Lógica para buscar usando o termo
        console.log("Buscando por:", term);
    };

    return (
        <SafeAreaView style={stylesListagem.background}>
            <ScrollView>
                <Components.Cabecalho />
                <View style={stylesListagem.container}>
                        <Components.Buscar onSearch={handleSearch}/>
                    <Text>Lista de usuários</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}