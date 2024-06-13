import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { useFocusEffect } from "@react-navigation/native";
import Connection from "../../../connection";
import stylesGrafico from "./desenvolvimento_parc.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Grafico({ filtroTrackSelecionado }) {
    const conn = Connection();
    const [chartData, setChartData] = useState(null);

    const fetchUserId = async () => {
        try {
            const userId = await AsyncStorage.getItem("userID");
            return userId;
        } catch (error) {
            console.error("Error retrieving user_id:", error);
            return null;
        }
    };

    const fetchData = async () => {
        try {
            const userId = await fetchUserId();
            const response = await conn.post(`/tracksById/${userId}`);
            const responseData = response.data;

            //console.log("Dados obtidos:", responseData);

            // Mapeia os dados conforme as regras especificadas
            const labels = [];
            const dataValues = [];

            responseData.forEach(item => {
                switch (item.track_id) {
                    case 1:
                        labels.push("Sell");
                        dataValues.push(item.completed ? 1 : 0);
                        break;
                    case 2:
                        labels.push("Service");
                        dataValues.push(item.completed ? 1 : 0);
                        break;
                    case 3:
                        labels.push("L&H");
                        dataValues.push(item.completed ? 1 : 0);
                        break;
                    case 4:
                        labels.push("Build");
                        dataValues.push(item.completed ? 1 : 0);
                        break;
                    default:
                        break;
                }
            });

            // Define os dados do gráfico
            const data = {
                labels: labels,
                datasets: [
                    {
                        data: dataValues,
                        color: (opacity = 1) => `rgba(199, 70, 52, ${opacity})`,
                    },
                ],
            };

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
