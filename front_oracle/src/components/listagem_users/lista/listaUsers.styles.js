import * as Styles from "../../../styles/index";
import { StyleSheet, StatusBar, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const margin = 20;

const stylesList = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: Styles.colors.brancoFundo,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: 20,
        minHeight: windowHeight - StatusBar.currentHeight,
        padding: 20,
        width: windowWidth - margin * 2,
        elevation: 5,
    },
    containerTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    texto: {
        color: Styles.colors.vermelho,
        fontFamily: Styles.fonts.regular,
        fontWeight: "bold",
        fontSize: Styles.sizes.large,
    },
});

export default stylesList;