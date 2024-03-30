import * as Styles from "../../styles/index";
import { StyleSheet, Platform, StatusBar } from "react-native";

const stylesListagem = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Styles.colors.vermelho,
    },
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Styles.colors.branco_fundo,
        marginLeft: 10,
        marginRight: 10,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});

export default stylesListagem;