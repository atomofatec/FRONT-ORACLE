import { SafeAreaView, ScrollView, View } from "react-native";
import * as Components from "../../components/index";
import stylesProvas from "./provas.styles";

export function Provas() {
    return (
        <SafeAreaView style={stylesProvas.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Parceiros" />
                <View style={stylesProvas.container}>
                    <Components.SubTitulo2
                        titulo="Provas de"
                        subTitulo="Conhecimento"
                    />
                    <Components.ListaProvas />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}