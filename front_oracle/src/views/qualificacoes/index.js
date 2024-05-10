import { SafeAreaView, ScrollView, View } from "react-native";
import * as Components from "../../components/index";
import stylesQualificacoes from "./Qualificacoes.style";

export function Qualificacoes() {
    return (
        <SafeAreaView style={stylesQualificacoes.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Administrador" />
                <View style={stylesQualificacoes.container}>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}