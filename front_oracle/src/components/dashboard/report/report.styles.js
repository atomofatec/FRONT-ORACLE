import * as Styles from "../../../styles/index";
import { StyleSheet, StatusBar, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const margin = 20;

const stylesReport = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: Styles.colors.brancoFundo,
        borderRadius: 20,
        marginTop: 15,
        marginBottom: 15,
        width: windowWidth - margin * 2,
        height: 180,
        elevation: 5,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    column: {
        flex: 1,
        flexDirection: "column",
    },
    partnerCell: {
        flexDirection: "column",
    },
    title: {
        margin: 6,
        fontWeight: "bold",
        textAlign: "center",
        color: Styles.colors.vermelho
    },
    textProduct: {
        textAlign: "right",
        color: Styles.colors.cinzaEscuro
    },
    text: {
        color: Styles.colors.cinzaEscuro
    },
    alignRight: {
        alignItems: "flex-end",
    },
    exportar: {
        color: "#B1B1B1",
        marginBottom: 20,
        marginRight: 10,
        alignSelf: "flex-end",
    }
});

export default stylesReport;
