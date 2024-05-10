import { SafeAreaView, ScrollView, View } from "react-native";
import * as Components from "../../components/index";
import stylesRecuperarSenha from "./RecuperarSenha.style";

export function RecuperarSenha() {
    return (
        <SafeAreaView style={stylesRecuperarSenha.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Administrador" />
                <View style={stylesRecuperarSenha.container}></View>
            </ScrollView>
        </SafeAreaView>
    );
}