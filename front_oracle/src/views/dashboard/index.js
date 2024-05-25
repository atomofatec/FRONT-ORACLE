import React, { useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import * as Components from "../../components/index";
import stylesDashboard from "./Dashboard.style";
import { useFocusEffect } from "@react-navigation/native";

export function Dashboard() {
    const [filtroSelecionado, setFiltroSelecionado] = useState("Conhecimento"); // Estado que armazena o filtro selecionado
    // const [filtroTrackSelecionado, setFiltroTrackSelecionado] = useState(1); // Estado que armazena o filtro selecionado

    // Função que é chamada quando um filtro é pressionado
    const handleFiltroClick = (filtro) => {
        setFiltroSelecionado(filtro);
    };

    // const handleFiltroTrackClick = (filtroTrack) => {
    //     setFiltroTrackSelecionado(filtroTrack);
    // };

    // // Use o useFocusEffect para limpar os filtros ao sair da tela
    // useFocusEffect(
    //     React.useCallback(() => {
    //         // Limpar os filtros ao sair da tela
    //         return () => {
    //             setFiltroSelecionado("Conhecimento");
    //             setFiltroTrackSelecionado(1);
    //         };
    //     }, [])
    // );

    return (
        <SafeAreaView style={stylesDashboard.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Consultor" />
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
                                selecionado={
                                    filtroSelecionado === "Conhecimento"
                                }
                                onClick={() =>
                                    handleFiltroClick("Conhecimento")
                                }
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
                    {/* <View style={stylesDashboard.containerFiltros}>
                        <Components.Filtro
                            texto="Hardware"
                            selecionado={filtroTrackSelecionado === 1}
                            onClick={() => handleFiltroTrackClick(1)}
                        />
                        <Components.Filtro
                            texto="Service"
                            selecionado={filtroTrackSelecionado === 2}
                            onClick={() => handleFiltroTrackClick(2)}
                        />
                        <Components.Filtro
                            texto="Sell"
                            selecionado={filtroTrackSelecionado === 3}
                            onClick={() => handleFiltroTrackClick(3)}
                        />
                        <Components.Filtro
                            texto="Build"
                            selecionado={filtroTrackSelecionado === 4}
                            onClick={() => handleFiltroTrackClick(4)}
                        />
                    </View> */}
                    <View style={stylesDashboard.containerStatistic}>
                        {filtroSelecionado === "relatorio" ? (
                            <Components.Report
                                // filtroTrackSelecionado={filtroTrackSelecionado}
                            />
                        ) : null}
                        {filtroSelecionado === "Conhecimento" ? (
                            <Components.Chart
                                // filtroTrackSelecionado={filtroTrackSelecionado}
                            />
                        ) : null}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}