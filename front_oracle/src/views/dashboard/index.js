import { SafeAreaView, ScrollView, View } from "react-native";
import * as Components from "../../components/index";
import stylesDashboard from "./Dashboard.style";

export function Dashboard() {
    return (
        <SafeAreaView style={stylesDashboard.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Funcionário" />
                <View style={stylesDashboard.container}></View>
            </ScrollView>
        </SafeAreaView>
    );
}
