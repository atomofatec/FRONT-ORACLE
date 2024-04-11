import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { CardUsers } from "../cards/cardUsers";
import stylesList from "./listaUsers.styles";
import { useNavigation } from "@react-navigation/native";
import Connection from "../../../connection";
import { colors } from "../../../styles";

export function ListaUsers({ searchTerm, filtroSelecionado }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const conn = Connection();

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await conn.get("/listUsers");
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }
        fetchUsers();
    }, []);

    if (loading) {
        return (
            <View style={stylesList.loadingContainer}>
                <ActivityIndicator size="large" color={colors.vermelho} />
            </View>
        );
    }

    // Filtra os usuários de acordo com o termo de busca e o tipo selecionado
    const filteredUsers = users.filter((user) => {
        // Filtra pelo termo de busca
        const searchTermMatch =
            user.user_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase());

        // Filtra pelo tipo selecionado
        const typeMatch =
            filtroSelecionado === "Todos" || user.type === filtroSelecionado;

        // Retorna true se o usuário passar pelos dois filtros
        return searchTermMatch && typeMatch;
    });

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
                        key={user.user_id}
                        user={user}
                        handleNavigate={() =>
                            navigation.navigate("Editar Usuário", {
                                userId: user.user_id,
                            })
                        }
                    />
                ))}
            </View>
        </View>
    );
}
