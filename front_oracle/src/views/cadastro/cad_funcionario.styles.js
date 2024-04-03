import * as Styles from "../../styles/index";
import { StyleSheet, StatusBar, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

const stylesCadastro = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Styles.colors.vermelho,
    },
    
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: Styles.colors.brancoFundo,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: 20,
        minHeight: windowHeight - StatusBar.currentHeight,
        padding: 20,
    },
    title: {
        color: "#C74634", // Adicionando a cor aqui
        fontSize: 20, // Exemplo, ajuste conforme necessário
        fontWeight: "bold", // Exemplo, ajuste conforme necessário
        marginBottom: 20, // Exemplo, ajuste conforme necessário
    },
    button: {
        marginTop: 50,
        backgroundColor: "#C74634",
        paddingVertical: 12,
        borderRadius: 20,
    },
})

export default stylesCadastro;
