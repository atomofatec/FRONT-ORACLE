import { SafeAreaView, ScrollView, View } from "react-native";
import * as Components from "../../components/index";
import stylesEditarUser from "./EditarUser.style";

export function EditarUser() {
    return (
        <SafeAreaView style={stylesEditarUser.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Administrador" />
                <View style={stylesEditarUser.container}>
                <Components.SubTituloVoltar titulo="Edição de Perfil" />
                    <Components.FormEditPerfil/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}