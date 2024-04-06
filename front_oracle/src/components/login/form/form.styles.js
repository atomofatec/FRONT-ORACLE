import { StyleSheet } from "react-native";
import * as Styles from "../../../styles/index";

const stylesForm = StyleSheet.create({
    formContainer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: 30,
        flex: 1,
    },
    inputContainer: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#BDBDBD",
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        paddingVertical: 8,
        fontSize: 16,
    },
    eyeIcon: {
        padding: 10,
    },
    forgotPassword: {
        color: "#B1B1B1",
        marginBottom: 20,
        alignSelf: "flex-end",
    },
});

export default stylesForm;