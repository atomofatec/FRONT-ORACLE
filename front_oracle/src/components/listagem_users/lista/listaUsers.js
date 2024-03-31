import React from "react";
import { View, Text } from "react-native";
import { CardUsers } from "../cards/cardUsers";
import mockedUsers from "../../../utils/mocks";
import stylesList from "./listaUsers.styles";

export function ListaUsers({ searchTerm, filtroSelecionado }) {
    const filteredUsers = mockedUsers.filter((user) => {
        // Filtra pelo termo de busca
        const searchTermMatch =
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase());

        // Filtra pelo tipo selecionado
        const typeMatch =
            filtroSelecionado === "Todos" || user.type === filtroSelecionado;

        return searchTermMatch && typeMatch;
    });

    return (
        <View>
            <View style={stylesList.containerTitle}>
                <Text style={stylesList.texto}>
                    Lista de usuários registrados ({filteredUsers.length})
                </Text>
            </View>
            <View style={stylesList.container}>
                {filteredUsers.map((user) => (
                    <CardUsers
                        key={user.id}
                        user={user}
                        handleNavigation={() => console.log("andou")}
                    />
                ))}
            </View>
        </View>
    );
}