import { Image, SafeAreaView } from "react-native";
import stylesCabecalhoLogin from "./cabecalhoLogin.styles";

export function CabecalhoLogin() {
    return (
        <SafeAreaView>
            <Image
                source={require("../../../assets/imgs/logo.png")}
                style={stylesCabecalhoLogin.logo}
                resizeMode="contain"
            />
        </SafeAreaView>
    );
}