import { View, Text, Image, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../styles/colors";

export function Cabecalho() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require("../../assets/imgs/logo_Oracle_branco.png")}
                    style={{ width: 82, height: 51 }}
                />
                <Text style={styles.tituloPag}>Usuário</Text>
            </View>
            <Ionicons
                name="person-circle"
                size={40}
                color={colors.branco_fundo}
            />
        </SafeAreaView>
    );
}

const styles = {
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.vermelho,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 35,
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    tituloPag: {
        color: colors.branco_fundo,
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "Inter",
        marginLeft: 10,
    },
};