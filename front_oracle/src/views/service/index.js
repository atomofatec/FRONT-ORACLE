import { SafeAreaView, ScrollView, View } from "react-native";
import * as Components from "../../components/index";
import stylesService from "./service.styles";

export function Service() {
    return (
        <SafeAreaView style={stylesService.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Parceiro" />
                <View style={stylesService.container}>
                    <Components.SubTituloVoltar titulo="Service" />
                    <Components.FormService />
                    <Components.Botao button="Enviar" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
