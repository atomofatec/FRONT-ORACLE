import { SafeAreaView, ScrollView, View } from "react-native";
import * as Components from "../../components/index";
import stylesQualificacoes from "./Qualificacoes.style";

export function Qualificacoes() {
    return (
        <SafeAreaView style={stylesQualificacoes.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Consultor" />
                <View style={stylesQualificacoes.container}>
                   <Components.SubTituloVoltar titulo="Qualificadores de Especialização" />
                   <Components.Qualificadores />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}