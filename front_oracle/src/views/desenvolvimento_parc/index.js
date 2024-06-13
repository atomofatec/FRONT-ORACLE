import { SafeAreaView, ScrollView, View } from "react-native";
import * as Components from "../../components/index";
import stylesDesenvolvimento from "./Desenvolvimento.style";

export function DesenvolvimentoParc() {
    return (
        <SafeAreaView style={stylesDesenvolvimento.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Parceiro" />
                <View style={stylesDesenvolvimento.container}>
                    <Components.SubTitulo2
                        titulo="Meu"
                        subTitulo="Desenvolvimento"
                    />
                    <Components.Grafico />
                    <Components.Relatorio />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}