import { SafeAreaView, ScrollView, View } from "react-native";
import * as Components from "../../components/index";
import stylesHardware from "./hardware.styles";

export function Hardware() {
    return (
        <SafeAreaView style={stylesHardware.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Parceiros" />
                <View style={stylesHardware.container}>
                    <Components.SubTituloVoltar titulo="Hardware" />
                    <Components.FormHardware />
                    <Components.Botao button="Enviar" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
