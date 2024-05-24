import { StyleSheet } from "react-native";
import * as Styles from "../../../styles/index";

const stylesCardQlt = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderColor: Styles.colors.cinzaClaro,
        marginBottom: 10,
        width: 349,
        paddingRight: 50
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
        flexShrink: 1,
        paddingRight: 10,
        paddingLeft: 10,
    },
});

export default stylesCardQlt;