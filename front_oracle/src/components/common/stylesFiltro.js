import { StyleSheet } from "react-native";
import * as Styles from "../../styles/index";

const stylesFiltro = StyleSheet.create({
    botao: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: Styles.colors.vermelho,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: "center",
        marginRight: 10,
    },
    texto: {
        fontFamily: Styles.fonts.regular,
        fontSize: Styles.sizes.small,
        fontWeight: "bold",
    },
});

export default stylesFiltro;