import { SafeAreaView, ScrollView, View } from "react-native";
import * as Components from "../../components/index";
import stylesAcompanhamento from "./Acompanhamento.style";

export function Acompanhamento() {
    return (
        <SafeAreaView style={stylesAcompanhamento.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Funcionário" />
                <View style={stylesAcompanhamento.container}>
                <Components.SubTitulo2
                        titulo="Edição de"
                        subTitulo="Parceiro"
                    />
                    <Components.FormEdit/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}