import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import stylesStatistic from "./statistic.styles";
import Connection from "../../../connection";
import { useFocusEffect } from "@react-navigation/native"; // Importe o useFocusEffect
import stylesList from "../../listagem_users/lista/listaUsers.styles";
import { colors } from "../../../styles";

export function Statistic() {
    const build = 3;
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
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

    // Filtra os usuários de acordo com o tipo selecionado
    const filteredUsers = users.filter((user) => user.type === "parceiro");

    const parceiros = filteredUsers.length;

    return (
        <View style={stylesStatistic.container}>
            {/* Linha 1 */}
            <View style={stylesStatistic.topRow}>
                <Text style={stylesStatistic.topText}>USUÁRIOS</Text>
            </View>
            {/* Linha 2 */}
            <View style={stylesStatistic.middleRow}>
                <Text style={stylesStatistic.numberleft}>{parceiros}</Text>
                <Text style={stylesStatistic.empty}></Text>
                <Text style={stylesStatistic.number}>{parceiros}</Text>
                <Text style={stylesStatistic.empty}></Text>
                <Text style={stylesStatistic.numberright}>{parceiros}</Text>
            </View>
            <View style={stylesStatistic.middleRow}>
                <Text>Build</Text>
                <Text style={stylesStatistic.empty}></Text>
                <Text>Parceiros</Text>
                <Text style={stylesStatistic.empty}></Text>
                <Text>Sell</Text>
            </View>
            {/* Linha 3 */}
            <View style={stylesStatistic.bottomRow}>
                <Text style={stylesStatistic.empty}></Text>
                <Text style={stylesStatistic.number}>{parceiros}</Text>
                <Text style={stylesStatistic.empty}></Text>
                <Text style={stylesStatistic.numberright}>{parceiros}</Text>
                <Text style={stylesStatistic.empty}></Text>
            </View>
            <View style={stylesStatistic.bottomRow}>
                <Text style={stylesStatistic.empty}></Text>
                <Text>Service</Text>
                <Text style={stylesStatistic.empty}></Text>
                <Text>Hardware</Text>
                <Text style={stylesStatistic.empty}></Text>
            </View>
        </View>
    );
}
