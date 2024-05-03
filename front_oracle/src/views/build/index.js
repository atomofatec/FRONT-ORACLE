import { SafeAreaView, ScrollView, View } from "react-native";
import * as Components from "../../components/index";
import stylesBuild from "./build.styles";

export function Build() {
    return (
        <SafeAreaView style={stylesBuild.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Parceiros" />
                <View style={stylesBuild.container}>
                    <Components.SubTituloVoltar titulo="Build" />
                    <Components.FormBuild />
                    <Components.Botao button="Enviar" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
