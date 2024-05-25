import { StyleSheet } from "react-native";
import * as Styles from "../../../styles/index";

const stylesQualificadores = StyleSheet.create({
    container: {
        backgroundColor: Styles.colors.brancoFundo,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        marginTop: 20,
        padding: 20,
        elevation: 5,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15, // Adiciona espaço vertical interno para melhorar a separação visual
    },
    texto: {
        fontFamily: Styles.fonts.regular,
        fontSize: Styles.sizes.medium,
        marginRight: 150,
    },
    separator: {
        height: 1,
        backgroundColor: '#E0E0E0', // Cor da linha separadora
    },
});

export default stylesQualificadores;