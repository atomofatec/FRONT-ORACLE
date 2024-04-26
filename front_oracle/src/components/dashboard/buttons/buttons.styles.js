import { StyleSheet } from "react-native";
import * as Styles from "../../../styles/index";

const stylesButtons = StyleSheet.create({
    botao: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Styles.colors.vermelho,
        paddingVertical: 15,
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
export default stylesButtons;