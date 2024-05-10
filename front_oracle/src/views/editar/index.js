import { SafeAreaView, ScrollView, View } from "react-native";
import * as Components from "../../components/index";
import stylesEditar from "./Editar.style";

export function Editar() {
    return (
        <SafeAreaView style={stylesEditar.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Administrador" />
                <View style={stylesEditar.container}>
                    <Components.SubTituloVoltar titulo="Edição" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}