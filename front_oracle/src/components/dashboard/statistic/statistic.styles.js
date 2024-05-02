import * as Styles from "../../../styles/index";
import { StyleSheet, StatusBar, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const margin = 20;

const stylesStatistic = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: Styles.colors.brancoFundo,
        borderRadius: 20,
        marginTop: 15,
        marginBottom: 15,
        padding: 12,
        width: windowWidth - margin * 2,
        elevation: 5,
    },
    topRow: {
        width: "100%",
        alignItems: "center",
    },
    middleRow: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    bottomRow: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    numbermiddleRow: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    number: {
        color: Styles.colors.vermelho,
        fontWeight: "bold"
    },
    numberleft: {
        color: Styles.colors.vermelho,
        fontWeight: "bold",
        marginLeft: 10
    },
    numberright: {
        color: Styles.colors.vermelho,
        fontWeight: "bold",
        marginRight: 10
    },
    topText: {
        textAlign: "center",
        fontSize: 15,
        marginBottom: 15,
        color: Styles.colors.cinzaEscuro
    },
    centerText: {
        textAlign: "center",
    },
});

export default stylesStatistic;