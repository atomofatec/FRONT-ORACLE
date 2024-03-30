import { StyleSheet } from "react-native";
import * as Styles from "../../styles/index";

const stylesBuscar = StyleSheet.create({
    buscaContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: Styles.sizes.large,
        height: 50,
    },
    buscaContorno: {
        flex: 1,
        backgroundColor: Styles.colors.branco,
        marginRight: Styles.sizes.small,
        borderWidth: 1,
        borderColor: Styles.colors.cinzaClaro,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Styles.sizes.medium,
        height: "100%",
    },
    buscaInput: {
        fontFamily: Styles.fonts.regular,
        fontSize: Styles.sizes.medium,
        width: "100%",
        height: "100%",
        paddingHorizontal: Styles.sizes.medium,
    },
    buscaBotao: {
        width: 50,
        height: "100%",
        backgroundColor: Styles.colors.brancoFundo,
        borderRadius: Styles.sizes.medium,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default stylesBuscar;