import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import * as Components from "../../components/index";
import stylesLogin from "./login.styles";

export function Login() {

    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={stylesLogin.container}>
            <Components.CabecalhoLogin />
            <View style={[stylesLogin.formContainer, { width: windowWidth }]}>
                <Components.Title title="LOGIN"/>
                <Components.Form />
                <Components.Button button="ENTRAR"/>
            </View>
        </View>
    );
}