import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Views from "../views/index";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function RoutesAdm() {
    return (
        // Barra de navegação
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { height: 65 },
                tabBarLabelStyle: { display: "none" },
            }}
        >
            {/* Início dos ícones da barra de navegação */}
            <Tab.Screen
                name="Lista de Usuários"
                component={Views.ListagemUsers}
                options={{
                    headerShown: false,
                    // focused = se a tela estiver ativa, color = cor do ícone, size = tamanho do ícone
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return (
                                <Ionicons
                                    size={(size = 30)} // Tamanho do ícone
                                    color={(color = "#C74634")} // Cor do ícone
                                    name="list" // Nome do ícone
                                />
                            );
                        }

                        return (
                            <Ionicons
                                size={(size = 30)}
                                color={(color = "#C74634")}
                                name="list-outline"
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Cadastro"
                component={Views.Cadastro}
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
            {/* Fim dos ícones da barra de navegação */}
        </Tab.Navigator>
    );
}