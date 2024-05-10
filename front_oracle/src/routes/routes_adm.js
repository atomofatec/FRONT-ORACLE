import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Views from "../views/index";
import { Ionicons } from "@expo/vector-icons";
import * as Styles from "../styles/index";

const Tab = createBottomTabNavigator();

export function RoutesAdm() {
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
                                    color={(color = Styles.colors.vermelho)} // Cor do ícone
                                    name="list" // Nome do ícone
                                />
                            );
                        }

                        return (
                            <Ionicons
                                size={(size = 30)}
                                color={(color = Styles.colors.vermelho)}
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
                name="Editar Usuário"
                component={Views.EditarUser}
                options={{ tabBarButton: () => null, headerShown: false }}
            />
            <Tab.Screen
                name="Editar"
                component={Views.Editar}
                options={{ tabBarButton: () => null, headerShown: false }}
            />
            {/* Fim dos ícones da barra de navegação */}
        </Tab.Navigator>
    );
}