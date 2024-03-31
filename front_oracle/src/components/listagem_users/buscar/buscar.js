import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Styles from "../../../styles/index";
import stylesBuscar from "./buscar.styles";

export function Buscar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <View style={stylesBuscar.buscaContainer}>
            <View style={stylesBuscar.buscaContorno}>
                <TextInput
                    style={stylesBuscar.buscaInput}
                    placeholder="Digite sua busca"
                    onChangeText={setSearchTerm}
                    value={searchTerm}
                />
            </View>
            <TouchableOpacity
                style={stylesBuscar.buscaBotao}
                onPress={handleSearch}
            >
                <Ionicons
                    size={(size = 30)}
                    color={(color = Styles.colors.vermelho)}
                    name="search"
                />
            </TouchableOpacity>
        </View>
    );
}