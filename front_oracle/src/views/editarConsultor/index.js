import { SafeAreaView, ScrollView, View } from "react-native";
import * as Components from "../../components/index";
import stylesConsultor from "../../views/editarConsultor/consultor.style";

export function EditarConsultor() {
    return (
        <SafeAreaView style={stylesConsultor.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Administrador" />
                <View style={stylesConsultor.container}>
                    <Components.SubTituloVoltar titulo="Edição" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}