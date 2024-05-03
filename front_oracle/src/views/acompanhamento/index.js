import React, { useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import * as Components from "../../components/index";
import stylesAcompanhamento from "./Acompanhamento.style";

export function Acompanhamento() {
    const [searchTerm, setSearchTerm] = useState(""); // Estado que armazena o termo de busca

    // Função que é chamada quando um termo de busca é inserido
    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <SafeAreaView style={stylesAcompanhamento.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Funcionário" />
                <View style={stylesAcompanhamento.container}>
                    <Components.SubTitulo2
                        titulo="Acompanhamento"
                        subTitulo="de Desenvolvimento"
                    />
                    <Components.Buscar onSearch={handleSearch} />
                    <View>
                        <Components.ListaParc
                            searchTerm={searchTerm}
                            filtroSelecionado="parceiro"
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
