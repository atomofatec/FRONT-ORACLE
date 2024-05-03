import { StyleSheet } from "react-native";
import * as Styles from "../../../styles/index";

const stylesListaProvas = StyleSheet.create({
    container: {
        flexDirection: "column", // Alterado para coluna para acomodar os novos botões
        padding: 10,
        width: 349,
        marginTop: 10
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10, // Espaçamento vertical entre os itens
        borderBottomWidth: 1,
        borderColor: Styles.colors.cinzaClaro
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
