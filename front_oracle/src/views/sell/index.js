import { SafeAreaView, ScrollView, View } from "react-native";
import * as Components from "../../components/index";
import stylesSell from "./sell.styles";

export function Sell() {
    return (
        <SafeAreaView style={stylesSell.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Parceiro" />
                <View style={stylesSell.container}>
                    <Components.SubTituloVoltar titulo="Service" />
                    <Components.FormSell />
                    <Components.Botao button="Enviar" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
