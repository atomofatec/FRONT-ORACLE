import React from "react";
import { View, Text } from "react-native";
import { CardUsers } from "../cards/cardUsers";
import mockedUsers from "../../../utils/mocks";
import stylesList from "./listaUsers.styles";
import { useNavigation } from '@react-navigation/native';

export function ListaUsers({ searchTerm, filtroSelecionado }) {
    // Filtra os usuários de acordo com o termo de busca e o tipo selecionado
    const filteredUsers = mockedUsers.filter((user) => {
        // Filtra pelo termo de busca
        const searchTermMatch =
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase());

        // Filtra pelo tipo selecionado
        const typeMatch =
            filtroSelecionado === "Todos" || user.type === filtroSelecionado;

            // Retorna true se o usuário passar pelos dois filtros
        return searchTermMatch && typeMatch;
    });

    const navigation = useNavigation();

    return (
        <View>
            <View style={stylesList.containerTitle}>
                {/* Exibe o texto com contador de usuários */}
                <Text style={stylesList.texto}>
                    Lista de usuários registrados ({filteredUsers.length})
                </Text>
            </View>
            <View style={stylesList.container}>
                {/* Mapeia os usuários filtrados e exibe um card para cada um */}
                {filteredUsers.map((user) => (
                    <CardUsers
                        key={user.id}
                        user={user}
                        handleNavigate={() => navigation.navigate('Editar Usuário', { userId: user.id })}
                    />
                ))}
            </View>
        </View>
    );
}