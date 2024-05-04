import * as Styles from "../../../styles/index";
import { StyleSheet } from "react-native";

const stylesForm = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#C74634",
        alignItems: "center",
        backgroundColor: Styles.colors.brancoFundo,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    formContainer: {
        backgroundColor: "#F8F8F8",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: 30,
        paddingVertical: 30,
        marginTop: 30,
        flex: 1,
    },
    inputContainer: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#BDBDBD",
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        flex: 1,
        paddingVertical: 8,
        fontSize: 16,
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    toggleButtonContainer: {
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginBottom: 20,
    },
    beneficios: {
        color: "#C74634",
        marginBottom: 10,
    },
    apto: {
        color: "#B1B1B1",
        fontSize: 8,
        marginBottom: 10,
    },
    delete: {
        color: "#B1B1B1",
        marginBottom: 10,
    },
    password: {
        color: "#B1B1B1",
        marginBottom: 10,
    },
    toggleButton: {
        backgroundColor: "#D1D0D0",
        borderRadius: 20,
        width: 40,
        height: 20,
    },
    toggleButtonActive: {
        backgroundColor: "#D1D0D0",
    },
    toggleInner: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#C74634",
    },
    toggleInnerActive: {
        backgroundColor: "#FFFFFF",
        marginLeft: 20,
    },
});

export default stylesForm;