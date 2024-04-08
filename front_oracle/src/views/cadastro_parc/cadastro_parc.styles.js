// import * as Styles from "../../styles/index";
// import { StyleSheet, StatusBar, Dimensions } from "react-native";

// const windowHeight = Dimensions.get("window").height;

// const stylesCadastroParc = StyleSheet.create({
//     background: {
//         flex: 1,
//         backgroundColor: Styles.colors.vermelho,
//     },
//     container: {
//         flex: 1,
//         flexDirection: "column",
//         alignItems: "center",
//         backgroundColor: Styles.colors.brancoFundo,
//         borderTopRightRadius: 40,
//         borderTopLeftRadius: 40,
//         marginTop: 10,
//         minHeight: windowHeight - StatusBar.currentHeight,
//         padding: 20,
//     },

// });

// export default stylesCadastroParc;

import * as Styles from "../../styles/index";
import { StyleSheet, StatusBar, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const statusBarHeight = StatusBar.currentHeight || 0; // Certifique-se de considerar que o StatusBar.currentHeight pode ser undefined

// Defina um valor fixo para subtrair da altura total da janela
const reducedHeight = 100; // Altere esse valor conforme necessário

const stylesCadastroParc = StyleSheet.create({
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
        marginTop: 10,
        minHeight: windowHeight - statusBarHeight - reducedHeight, // Subtrai um valor fixo da altura total da janela
        padding: 20,
    },
});

export default stylesCadastroParc;
