import { StyleSheet } from "react-native";
 
const stylesSubTitulo = StyleSheet.create({
    title: {
        fontSize: 18,
        color: "#C74634",
        fontWeight: "bold"
    },
    titleUser: {
        color: "#C74634",
    },
    formContainer: {
        paddingVertical: 8,
        paddingHorizontal: 26,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    toggleButton: {
        backgroundColor: "#ccc",
        borderRadius: 20,
        width: 40,
        height: 20,
    },
    toggleButtonActive: {
        backgroundColor: "#D1D0D0",
    },
    toggleInner: {
        backgroundColor: "#C74634",
        borderRadius: 10,
        width: 20,
        height: 20,
    },
    toggleInnerActive: {
        marginLeft: 20,
    },
});
 
export default stylesSubTitulo;