import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { useFocusEffect } from "@react-navigation/native";
import Connection from "../../../connection";
import stylesGrafico from "./desenvolvimento_parc.styles";

export function Grafico({ filtroTrackSelecionado }) {
    const conn = Connection();
    const [chartData, setChartData] = useState(null);

    // Função para buscar os dados do endpoint
    const fetchData = async () => {
        try {
            // Faz uma solicitação para o endpoint para obter os dados
            const response = await conn.get("/tracksById/:user_id");
            // Extrai os dados da resposta
            const responseData = response.data;

            console.log("Dados obtidos:", responseData);

            // Função para mapear os nomes das tracks como abreviações
            const getShortLabel = (label) => {
                switch (label) {
                    case "Cloud Sell Track":
                        return "Sell";
                    case "Cloud Service Track":
                        return "Service";
                    case "License & Hardware Track":
                        return "L&H";
                    case "Cloud Build Track":
                        return "Build";
                    default:
                        return label;
                }
            };

            // Mapeia os dados para formatá-los corretamente para o gráfico
            const labels = responseData.map((item) =>
                getShortLabel(item["Track Name"])
            );
            console.log("Labels:", labels);
            const dataValues = responseData.map(
                (item) => item["Completions Count"]
            );
            console.log("Data values:", dataValues);

            // Define os dados do gráfico
            const data = {
                labels: labels,
                datasets: [
                    {
                        data: dataValues,
                    },
                ],
            };

            // Define os dados do gráfico com os dados obtidos
            setChartData(data);
        } catch (error) {
            console.error("Erro ao buscar os dados:", error);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchData();
        }, [])
    );

    const barColors = ["#C74634", "#C74634", "#C74634", "#C74634"];

    return (
        <View style={stylesGrafico.container}>
            {chartData ? (
                <BarChart
                    data={chartData}
                    width={300}
                    height={200}
                    chartConfig={{
                        backgroundGradientFrom: "#F8F8F8",
                        backgroundGradientTo: "#F8F8F8",
                        color: () => "#C74634",
                        labelColor: () => "#B1B1B1",
                        propsForBackgroundLines: {
                            strokeWidth: 0,
                        },
                        decimalPlaces: 0,
                        style: {
                            borderRadius: 20,
                        },
                    }}
                    fromZero={true}
                    style={{
                        marginVertical: 8,
                        marginLeft: 0,
                    }}
                    yAxisSuffix=""
                    renderDotContent={({ x, y, index }) => (
                        <View
                            key={index}
                            style={{
                                position: "absolute",
                                left: x - 8,
                                top: y - 20,
                                width: 16,
                                height: 16,
                                borderRadius: 8,
                                backgroundColor: barColors[index],
                            }}
                        />
                    )}
                />
            ) : (
                <ActivityIndicator size="large" color="#0000ff" />
            )}
        </View>
    );
}