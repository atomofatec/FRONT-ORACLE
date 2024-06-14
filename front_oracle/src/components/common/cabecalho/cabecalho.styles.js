import { StyleSheet, Platform, StatusBar } from "react-native";
import * as Styles from "../../../styles/index";

const stylesCabecalho = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Styles.colors.vermelho,
        marginLeft: 10,
        marginRight: 10,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    tituloPag: {
        color: Styles.colors.brancoFundo,
        fontSize: Styles.sizes.xLarge,
        fontWeight: "bold",
        fontFamily: Styles.fonts.Inter,
        marginLeft: 10,
    },
    modalOverlay: {
        flex: 1,
    },
    modalContent: {
        position: 'absolute',
        top: 60,
        right: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    menuItem: {
        padding: 10,
    },
    menuItemText: {
        fontSize: 16,
        color: 'black',
    },
});

export default stylesCabecalho;