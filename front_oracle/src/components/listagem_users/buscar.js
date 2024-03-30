import React, { useState } from "react";
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Styles from "../../styles/index";
import stylesBuscar from "./stylesBuscar";

export function Buscar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState(""); // Estado do termo de busca

    // Função que chama a busca
    const handleSearch = () => {
        // Chama a função de busca passada como prop
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
            <TouchableOpacity style={stylesBuscar.buscaBotao}>
                <Ionicons
                    size={(size = 30)} // Tamanho do ícone
                    color={(color = Styles.colors.vermelho)} // Cor do ícone
                    name="search" // Nome do ícone
                />
            </TouchableOpacity>
        </View>
    );
}