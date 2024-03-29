import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Views from "../views/index";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export function RoutesAdm() {
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
                name="Lista de Usuários"
                component={Views.ListagemUsers}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={require("../assets/imgs/listaUsers.png")}
                            style={{ width: 30, height: 30 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Cadastro"
                component={Views.Cadastro}
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