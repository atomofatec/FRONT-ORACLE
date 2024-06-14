import { StyleSheet } from "react-native";
import * as Styles from "../../styles/index";

const stylesRecuperarSenha = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#C74634",
    },
    formContainer: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: 30,
        flex: 1,
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

export default stylesRecuperarSenha;