import { StyleSheet, Platform, StatusBar } from "react-native";
import * as Styles from "../../../styles/index";

const stylesCabecalho = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Styles.colors.vermelho,
        marginLeft: 10,
        marginRight: 10,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    tituloPag: {
        color: Styles.colors.brancoFundo,
        fontSize: Styles.sizes.xLarge,
        fontWeight: "bold",
        fontFamily: Styles.fonts.Inter,
        marginLeft: 10,
    },
});

export default stylesCabecalho;