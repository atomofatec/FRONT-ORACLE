import React from "react";
import { View, Text } from "react-native";
import { CardUsers } from "../cards/cardUsers";
import mockedUsers from "../../../utils/mocks";
import stylesList from "./listaUsers.styles";

export function ListaUsers({ searchTerm }) {
    const data = mockedUsers.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <View>
            <View style={stylesList.containerTitle}>
                <Text style={stylesList.texto}>
                    Lista de usuários registrados ({data.length})
                </Text>
            </View>
            <View style={stylesList.container}>
                {data.map((user) => (
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