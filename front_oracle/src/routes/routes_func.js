import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Views from "../views/index";
import { Ionicons } from "@expo/vector-icons";
import * as Styles from "../styles/index";

const Tab = createBottomTabNavigator();

export function RoutesFunc() {
    return (
        // Barra de navegação
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { height: 65 },
                tabBarLabelStyle: { display: "none" },
            }}
            unmountOnBlur={true}
        >
            {/* Início dos ícones da barra de navegação */}
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
                                    color={(color = Styles.colors.vermelho)} // Cor do ícone
                                    name="home" // Nome do ícone
                                />
                            );
                        }

                        return (
                            <Ionicons
                                size={(size = 30)}
                                color={(color = Styles.colors.vermelho)}
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
                                    color={(color = Styles.colors.vermelho)}
                                    name="stats-chart"
                                />
                            );
                        }

                        return (
                            <Ionicons
                                size={(size = 30)}
                                color={(color = Styles.colors.vermelho)}
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
                                    color={(color = Styles.colors.vermelho)}
                                    name="person-add"
                                />
                            );
                        }

                        return (
                            <Ionicons
                                size={(size = 30)}
                                color={(color = Styles.colors.vermelho)}
                                name="person-add-outline"
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Tracks"
                component={Views.Tracks}
                options={{ tabBarButton: () => null, headerShown: false }}
            />
            <Tab.Screen
                name="Qualificacoes"
                component={Views.Qualificacoes}
                options={{ tabBarButton: () => null, headerShown: false }}
            />
            <Tab.Screen
                name="EditarParc"
                component={Views.EditarParc}
                options={{ tabBarButton: () => null, headerShown: false }}
            />
            {/* Fim dos ícones da barra de navegação */}
        </Tab.Navigator>
    );
}