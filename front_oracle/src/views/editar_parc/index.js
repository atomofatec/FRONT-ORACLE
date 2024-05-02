import { SafeAreaView, ScrollView, View } from "react-native";
import * as Components from "../../components/index";
import stylesEditarParc from "./editarParc.style";

export function EditarParc() {
    return (
        <SafeAreaView style={stylesEditarParc.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Funcionário" />
                <View style={stylesEditarParc.container}>
                    <Components.SubTituloVoltar titulo="Edição de Parceiro" />
                    <Components.FormEditParc />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}