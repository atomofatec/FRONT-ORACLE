import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Views from "../views/index";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function RoutesFunc() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { height: 65 },
                tabBarLabelStyle: { display: "none" },
            }}
        >
            <Tab.Screen
                name="Painel Inicial"
                component={Views.Dashboard}
                options={{
                    headerShown: false,
                    // focused = se a tela estiver ativa, color = cor do ícone, size = tamanho do ícone
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return (
                                <Ionicons
                                    size={(size = 30)} // Tamanho do ícone
                                    color={(color = "#C74634")} // Cor do ícone
                                    name="home" // Nome do ícone
                                />
                            );
                        }

                        return (
                            <Ionicons
                                size={(size = 30)}
                                color={(color = "#C74634")}
                                name="home-outline"
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Desenvolvimento de Conhecimento"
                component={Views.Acompanhamento}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return (
                                <Ionicons
                                    size={(size = 30)}
                                    color={(color = "#C74634")}
                                    name="stats-chart"
                                />
                            );
                        }

                        return (
                            <Ionicons
                                size={(size = 30)}
                                color={(color = "#C74634")}
                                name="stats-chart-outline"
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Cadastro de Parceiros"
                component={Views.CadastroParc}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return (
                                <Ionicons
                                    size={(size = 30)}
                                    color={(color = "#C74634")}
                                    name="person-add"
                                />
                            );
                        }

                        return (
                            <Ionicons
                                size={(size = 30)}
                                color={(color = "#C74634")}
                                name="person-add-outline"
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}