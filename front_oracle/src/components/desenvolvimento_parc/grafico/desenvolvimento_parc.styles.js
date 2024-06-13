import * as Styles from "../../../styles/index";
import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const margin = 20;

const stylesGrafico = StyleSheet.create({
    container: {
        flex: 0.4,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: Styles.colors.brancoFundo,
        borderRadius: 20,
        marginTop: 15,
        marginBottom: 15,
        width: windowWidth - margin * 2,
        elevation: 5,
    },
});

export default stylesGrafico;