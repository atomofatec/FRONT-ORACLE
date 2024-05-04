import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { BarChart } from "react-native-chart-kit";
import stylesChart from "./chart.styles";
import Connection from "../../../connection";

export function Chart({ filtroTrackSelecionado }) {
    const conn = Connection();
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        // Função para buscar os dados do endpoint
        const fetchData = async () => {
            try {
                // Corpo da requisição
                const requestBody = {
                    trackId: filtroTrackSelecionado,
                };

                // Faz uma solicitação HTTP para o endpoint para obter os dados
                const response = await conn.post(
                    "/selectExpertise",
                    requestBody
                );
                // Extrai os dados da resposta
                const responseData = response.data;

                console.log("Dados obtidos:", responseData);

                // Mapeia os dados para formatá-los corretamente para o gráfico
                const labels = responseData.map((item) => item.user_name);
                const dataValues = responseData.map(
                    (item) => item.total_test_grade
                );

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

        // Chama a função para buscar os dados sempre que filtroTrackSelecionado mudar
        fetchData();
    }, [filtroTrackSelecionado]); // Dependência: filtroTrackSelecionado

    const barColors = ["#C74634", "#C74634", "#C74634", "#C74634"];

    return (
        <View style={stylesChart.container}>
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