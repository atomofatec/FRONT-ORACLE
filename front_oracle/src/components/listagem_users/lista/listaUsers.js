import React, { useState, useCallback } from "react";
import { View, Text, ActivityIndicator, RefreshControl, ScrollView } from "react-native";
import { CardUsers } from "../cards/cardUsers";
import stylesList from "./listaUsers.styles";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Connection from "../../../connection";
import { colors } from "../../../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function ListaUsers({ searchTerm, filtroSelecionado }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const navigation = useNavigation();
    const conn = Connection();

    const fetchUsers = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await conn.get("/listUsers");
            setUsers(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching users:", error);
            setError("Failed to fetch users");
            setLoading(false);
        }
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchUsers().then(() => setRefreshing(false));
    }, []);

    useFocusEffect(
        useCallback(() => {
            fetchUsers();
        }, [filtroSelecionado, searchTerm])
    );

    if (loading) {
        return (
            <View style={stylesList.loadingContainer}>
                <ActivityIndicator size="large" color={colors.vermelho} />
            </View>
        );
    }

    if (error) {
        return (
            <View style={stylesList.loadingContainer}>
                <Text>Erro ao carregar usuários: {error}</Text>
            </View>
        );
    }

    const handleNavigate = async (userId) => {
        try {
            await AsyncStorage.setItem("adm_id", userId.toString());
            navigation.navigate("Editar");
        } catch (error) {
            console.error("Error saving adm_id:", error);
        }
    };

    const filteredUsers = users.filter((user) => {
        const searchTermMatch =
            user.user_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase());

        const typeMatch =
            filtroSelecionado === "Todos" || user.type === filtroSelecionado;

        return searchTermMatch && typeMatch;
    });

    return (
        <ScrollView
            contentContainerStyle={stylesList.container}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <View style={stylesList.containerTitle}>
                <Text style={stylesList.texto}>
                    Lista de usuários registrados ({filteredUsers.length})
                </Text>
            </View>
            {filteredUsers.map((user) => (
                <CardUsers
                    key={user.user_id}
                    user={user}
                    handleNavigate={() => handleNavigate(user.user_id)}
                />
            ))}
        </ScrollView>
    );
}
