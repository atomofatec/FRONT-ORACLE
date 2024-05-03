import * as Styles from "../../../styles/index";
import { StyleSheet, StatusBar, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const margin = 20;

const stylesChart = StyleSheet.create({
    container: {
        flex: 1,
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

export default stylesChart;