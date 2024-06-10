import * as Styles from "../../../styles/index";
import { StyleSheet, Dimensions } from "react-native";

// const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const margin = 20;

const stylesList = StyleSheet.create({
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
});

export default stylesList;