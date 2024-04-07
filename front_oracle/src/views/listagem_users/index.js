import React, { useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import * as Components from "../../components/index";
import stylesListagem from "./listagemUsers.styles";

export function ListagemUsers() {
    const [filtroSelecionado, setFiltroSelecionado] = useState("Todos"); // Estado que armazena o filtro selecionado
    const [searchTerm, setSearchTerm] = useState(""); // Estado que armazena o termo de busca

    // Função que é chamada quando um filtro é pressionado
    const handleFiltroClick = (filtro) => {
        setFiltroSelecionado(filtro);
    };

    // Função que é chamada quando um termo de busca é inserido
    const handleSearch = (term) => {
        setSearchTerm(term);
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
                            selecionado={filtroSelecionado === "funcionário"}
                            onClick={() => handleFiltroClick("funcionário")}
                        />
                        <Components.Filtro
                            texto="Administradores"
                            selecionado={filtroSelecionado === "administrador"}
                            onClick={() => handleFiltroClick("administrador")}
                        />
                    </View>
                    <View>
                        <Components.ListaUsers
                            searchTerm={searchTerm}
                            filtroSelecionado={filtroSelecionado}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}