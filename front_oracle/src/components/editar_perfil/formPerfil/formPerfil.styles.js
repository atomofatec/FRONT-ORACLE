import * as Styles from "../../../styles/index";
import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const margin = 20;

const stylesFormPerfil = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#C74634',
        alignItems: "center",
        backgroundColor: Styles.colors.brancoFundo,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40
    },
    formContainer: {
        backgroundColor: '#F8F8F8',
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        paddingVertical: 8,
        fontSize: 16,
    },
    password: {
        color: "#B1B1B1",
        marginBottom: 10,
        alignSelf: "flex-end",
    },
    delete: {
        color: "#B1B1B1",
        marginBottom: 20,
        alignSelf: "flex-end",
    },
    // Estilos do Modal Personalizado
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    modalContainer: {
        width: 300,
        height: 200,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 16,
    },
    modalButton: {
        width: 100,
        backgroundColor: "#C74634",
        borderRadius: 5,
        padding: 10,
        elevation: 2,
    },
    modalButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalIcon: {
        marginBottom: 10,
    },
});

export default stylesFormPerfil;