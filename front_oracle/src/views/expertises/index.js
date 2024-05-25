import { SafeAreaView, ScrollView, View } from "react-native";
import * as Components from "../../components/index";
import stylesExpertises from "./Expertises.style";

export function Expertises() {
    return (
        <SafeAreaView style={stylesExpertises.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Consultor" />
                <View style={stylesExpertises.container}>
                    <Components.SubTituloVoltar titulo="Expertises" />
                    <View>
                        <Components.ListaExpertises />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}