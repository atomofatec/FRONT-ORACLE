import React, { useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import * as Components from "../../components/index";
import stylesDashboard from "./dashboard.style";

export function Dashboard() {
    const [filtroSelecionado, setFiltroSelecionado] = useState("Conhecimento"); // Estado que armazena o filtro selecionado

    // Função que é chamada quando um filtro é pressionado
    const handleFiltroClick = (filtro) => {
        setFiltroSelecionado(filtro);
    };

    return (
        <SafeAreaView style={stylesDashboard.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Funcionário" />
                <View style={stylesDashboard.container}>
                    <View style={stylesDashboard.containerStatistic}>
                        <Components.Statistic />
                    </View>
                    <Components.TitleDash title="Acompanhar" />
                    <View style={stylesDashboard.containerFiltros}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <Components.Buttons
                                texto="Conhecimento"
                                selecionado={filtroSelecionado === "Conhecimento"}
                                onClick={() => handleFiltroClick("Conhecimento")}
                                icone="bulb-outline"
                            />
                            <Components.Buttons
                                texto="Relatório"
                                selecionado={filtroSelecionado === "relatorio"}
                                onClick={() => handleFiltroClick("relatorio")}
                                icone="newspaper-outline"
                            />
                        </ScrollView>
                    </View>
                    <View style={stylesDashboard.containerStatistic}>
                        {filtroSelecionado === "relatorio" ? (
                            <Components.Report />
                        ) : null}
                        {filtroSelecionado === "Conhecimento" ? (
                            <Components.Chart />
                        ) : null}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
