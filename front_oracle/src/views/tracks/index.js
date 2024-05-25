import { SafeAreaView, ScrollView, View, Text } from "react-native";
import * as Components from "../../components/index";
import stylesTracks from "./Tracks.styles";

export function Tracks() {
    return (
        <SafeAreaView style={stylesTracks.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Consultor" />
                <View style={stylesTracks.container}>
                    <Components.SubTituloVoltar
                        titulo="Program Tracks"
                    />
                    <Components.Tracks />
                    <Text style={stylesTracks.editar}>Editar Parceiro</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}