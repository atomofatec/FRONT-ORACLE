import { SafeAreaView, ScrollView, View } from "react-native";
import * as Components from "../../components/index";
import stylesTracks from "./Tracks.styles";

export function Tracks() {
    return (
        <SafeAreaView style={stylesTracks.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Consultor" />
                <View style={stylesTracks.container}>
                    <Components.SubTitulo2
                        titulo="Program"
                        subTitulo="Tracks"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}