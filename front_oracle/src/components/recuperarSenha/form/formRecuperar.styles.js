import { StyleSheet } from "react-native";

const stylesFormRecuperar = StyleSheet.create({
    formContainer: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: 30,
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
    texto: {
        color: "#C74634",
        marginBottom: 50,
    },
});

export default stylesFormRecuperar;