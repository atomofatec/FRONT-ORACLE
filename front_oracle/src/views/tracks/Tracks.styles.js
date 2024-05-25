import * as Styles from "../../styles/index";
import { StyleSheet, StatusBar, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

const stylesTracks = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Styles.colors.vermelho,
    },
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: Styles.colors.brancoFundo,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: 10,
        minHeight: windowHeight - StatusBar.currentHeight,
        padding: 20,
    },
    editar: {
        color: "#B1B1B1",
        marginBottom: 10,
        alignSelf: "flex-end",
        marginTop: 10,
    },
});

export default stylesTracks;