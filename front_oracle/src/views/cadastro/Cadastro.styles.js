import * as Styles from "../../styles/index";
import { StyleSheet, StatusBar, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

const stylesCadastro = StyleSheet.create({
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
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    modalContainer: {
        width: 300,
        height: 150,
        padding: 20,
        backgroundColor: Styles.colors.brancoFundo,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    modalIcon: {
        marginBottom: 10,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 16,
    },
    modalButton: {
        width: 100,
        backgroundColor: Styles.colors.vermelho,
        borderRadius: 5,
        padding: 10,
        elevation: 2,
    },
    modalButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default stylesCadastro;