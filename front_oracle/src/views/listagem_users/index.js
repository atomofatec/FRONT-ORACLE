import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import * as Components from "../../components/index";
import stylesListagem from "./listagemUsers.styles";

export function ListagemUsers() {
    const [filtroSelecionado, setFiltroSelecionado] = useState('Todos');

    const handleFiltroClick = (filtro) => {
        setFiltroSelecionado(filtro);
    };

    const handleSearch = (term) => {
        // Lógica para buscar usando o termo
        console.log("Buscando por:", term);
    };

    return (
        <SafeAreaView style={stylesListagem.background}>
            <ScrollView>
                <Components.Cabecalho />
                <View style={stylesListagem.container}>
                    <Components.Buscar onSearch={handleSearch} />
                    <View style={stylesListagem.containerFiltros}>
                        <Components.Filtro
                            texto="Todos"
                            selecionado={filtroSelecionado === "Todos"}
                            onClick={() => handleFiltroClick("Todos")}
                        />
                        <Components.Filtro
                            texto="Funcionários"
                            selecionado={filtroSelecionado === "Funcionários"}
                            onClick={() => handleFiltroClick("Funcionários")}
                        />
                        <Components.Filtro
                            texto="Administradores"
                            selecionado={filtroSelecionado === "Administradores"}
                            onClick={() => handleFiltroClick("Administradores")}
                        />
                    </View>
                    <View>

                    <Components.ListaUsers />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}