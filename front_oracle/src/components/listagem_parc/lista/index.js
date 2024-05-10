import React, { useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { CardParc } from "../cards";
import stylesList from "./listaParc.styles";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Connection from "../../../connection";
import { colors } from "../../../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function ListaParc({ searchTerm, filtroSelecionado }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const conn = Connection();

    const fetchUsers = async () => {
        try {
            const response = await conn.get("/listUsers");
            setUsers(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchUsers();
        }, [])
    );

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
            <View style={stylesList.container}>
                {/* Mapeia os usuários filtrados e exibe um card para cada um */}
                {filteredUsers.map((user) => (
                    <CardParc
                        key={user.user_id}
                        user={user}
                        handleNavigate={() => {
                            AsyncStorage.setItem(
                                "user_id",
                                user.user_id.toString()
                            );
                            navigation.navigate("Tracks");
                        }}
                    />
                ))}
            </View>
        </View>
    );
}