import { View, Dimensions } from "react-native";
import * as Components from "../../components/index";
import stylesRecuperarSenha from "./RecuperarSenha.style";

export function RecuperarSenha() {
    const windowWidth = Dimensions.get("window").width;

    return (
        <View style={stylesRecuperarSenha.container}>
            <Components.CabecalhoLogin />
            <View style={[stylesRecuperarSenha.formContainer, { width: windowWidth }]}>
                <Components.TituloVoltar title="RECUPERE SUA SENHA" />
                <Components.FormRecuperar />
                <Components.ButtonLarge
                    button="ENVIAR"
                />
            </View>
        </View>
    );
}