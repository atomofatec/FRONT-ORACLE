import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Rotas from "./src/routes/index";
import { useFonts } from "expo-font";
import * as Views from "./src/views/index";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter: require("./src/styles/fonts/Inter-VariableFont_slnt,wght.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={Views.Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Admin"
                    component={Rotas.RoutesAdm}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Func"
                    component={Rotas.RoutesFunc}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Parc"
                    component={Rotas.RoutesParc}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="RecuperarSenha"
                    component={Views.RecuperarSenha}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}