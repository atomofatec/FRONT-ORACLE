import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Views from "../views/index";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export function RoutesFunc() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { height: 80 },
            }}
            tabBarOptions={{
                labelStyle: { display: "none" }, // Oculta o texto da aba
            }}
        >
            <Tab.Screen
                name="Painel Inicial"
                component={Views.Dashboard}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={require("../assets/imgs/home.png")}
                            style={{ width: 30, height: 30 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Desenvolvimento de Conhecimento"
                component={Views.Acompanhamento}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={require("../assets/imgs/bar-chart.png")}
                            style={{ width: 30, height: 30 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Cadastro de Parceiros"
                component={Views.CadastroParc}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={require("../assets/imgs/cadastro.png")}
                            style={{ width: 30, height: 30 }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}