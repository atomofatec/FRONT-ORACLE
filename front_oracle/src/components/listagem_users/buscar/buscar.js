import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Styles from "../../../styles/index";
import stylesBuscar from "./buscar.styles";

export function Buscar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState(""); // Estado que armazena o termo de busca

    // Função que é chamada quando o botão de busca é pressionado
    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <View style={stylesBuscar.buscaContainer}>
            <View style={stylesBuscar.buscaContorno}>
                {/* Entrada do termo que será buscado */}
                <TextInput
                    style={stylesBuscar.buscaInput}
                    placeholder="Digite sua busca"
                    onChangeText={setSearchTerm}
                    value={searchTerm}
                />
            </View>
            {/* Botão de busca */}
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