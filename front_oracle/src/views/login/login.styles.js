import { StyleSheet } from "react-native";

const stylesLogin = StyleSheet.create({
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
    // Estilos do Modal Personalizado
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    modalContainer: {
        width: 300,
        height: 200,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 16,
    },
    modalButton: {
        width: 100,
        backgroundColor: "#C74634",
        borderRadius: 5,
        padding: 10,
        elevation: 2,
    },
    modalButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalIcon: {
        marginBottom: 10,
    },
});

export default stylesLogin;