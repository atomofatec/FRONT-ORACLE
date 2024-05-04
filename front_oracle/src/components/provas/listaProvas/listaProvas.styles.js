import * as Styles from "../../../styles/index";
import { StyleSheet, StatusBar, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const margin = 20;

const stylesListaProvas = StyleSheet.create({
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
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10, // Espaçamento vertical entre os itens
        borderBottomWidth: 1,
        borderColor: Styles.colors.cinzaClaro,
    },
    containerUser: {
        flexDirection: "row",
        alignItems: "center",
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: Styles.sizes.medium,
        fontWeight: "bold",
        color: Styles.colors.cinzaEscuro,
    },
    email: {
        fontSize: Styles.sizes.small,
        fontWeight: "bold",
        color: Styles.colors.cinzaClaro,
    },
    button: {
        backgroundColor: Styles.colors.verde, // Cor de fundo do botão
        paddingHorizontal: 15, // Espaçamento horizontal dentro do botão
        paddingVertical: 10, // Espaçamento vertical dentro do botão
        borderRadius: 5, // Borda arredondada
    },
    buttonText: {
        color: Styles.colors.branco, // Cor do texto do botão
        fontWeight: "bold",
    },
});

export default stylesListaProvas;