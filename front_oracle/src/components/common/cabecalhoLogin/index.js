import { View, Text, Image, SafeAreaView } from "react-native";
import stylesLogo from "./cabecalhoLogin.styles";

export function CabecalhoLogin() {
    return (
        <SafeAreaView>
            <Image
                source={require('../../../assets/imgs/logo.png')}
                style={stylesLogo}
                resizeMode="contain"
            />
        </SafeAreaView>
    );
}