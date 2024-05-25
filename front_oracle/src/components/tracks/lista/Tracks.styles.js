import * as Styles from "../../../styles/index";
import { StyleSheet, StatusBar, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const margin = 20;

const stylesTracks = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: Styles.colors.brancoFundo,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        marginTop: 20,
        padding: 20,
        maxHeight: 280,
        width: windowWidth - margin * 2,
        elevation: 5,
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
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
    number: {
        fontSize: Styles.sizes.small,
        fontWeight: "bold",
        color: Styles.colors.vermelho,
    }
});

export default stylesTracks;