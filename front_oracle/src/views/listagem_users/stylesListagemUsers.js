import * as Styles from "../../styles/index";
import { StyleSheet, StatusBar, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

const stylesListagem = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Styles.colors.vermelho,
    },
    container: {
        flex: 1,
        flexDirection: "line",
        alignItems: "center",
        backgroundColor: Styles.colors.brancoFundo,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: 20,
        minHeight: windowHeight - StatusBar.currentHeight,
        padding: 20,
    },
    containerFiltros: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
    },
});

export default stylesListagem;