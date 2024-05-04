import * as Styles from "../../styles/index";
import { StyleSheet, StatusBar, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const statusBarHeight = StatusBar.currentHeight || 0;

// Define um valor fixo para subtrair da altura total da janela
const reducedHeight = 100;

const stylesDashboard = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Styles.colors.vermelho,
    },
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: Styles.colors.brancoFundo,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: 10,
        minHeight: windowHeight - statusBarHeight - reducedHeight,
        padding: 20,
    },
    containerStatistic: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
    },
    containerFiltros: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
    },
});

export default stylesDashboard;