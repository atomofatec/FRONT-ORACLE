import { StyleSheet } from "react-native";
import * as Styles from "../../styles/index";

const stylesBuscar = StyleSheet.create({
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: Styles.sizes.large,
        height: 50,
      },
      searchWrapper: {
        flex: 1,
        backgroundColor: Styles.colors.branco,
        marginRight: Styles.sizes.small,
        borderWidth: 1,
        borderColor: Styles.colors.cinza_claro,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Styles.sizes.medium,
        height: "100%",
      },
      searchInput: {
        fontFamily: Styles.fonts.regular,
        width: "100%",
        height: "100%",
        paddingHorizontal: Styles.sizes.medium,
      },
      searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: Styles.colors.branco_fundo,
        borderRadius: Styles.sizes.medium,
        justifyContent: "center",
        alignItems: "center",
      },
});

export default stylesBuscar;