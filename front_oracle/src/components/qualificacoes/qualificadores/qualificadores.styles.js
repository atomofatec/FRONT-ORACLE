import { StyleSheet, Dimensions } from "react-native";
import * as Styles from "../../../styles/index";

// const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const margin = 20;

const stylesQualificadores = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",

        backgroundColor: Styles.colors.brancoFundo,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        marginTop: 20,
        padding: 20,
        width: windowWidth - margin * 2,
        elevation: 5,
        alignSelf: "stretch", // permite que o container se adapte à largura do seu conteúdo
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
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

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

export default stylesQualificadores;