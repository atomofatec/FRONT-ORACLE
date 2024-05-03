import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { BarChart } from "react-native-chart-kit";
import Connection from "../../../connection";
import { colors } from "../../../styles";
import stylesChart from "./chart.styles";

export function Chart() {
    const [expertiseData, setExpertiseData] = useState([]);
    const [loading, setLoading] = useState(true);
    const conn = Connection();

    useEffect(() => {
        async function fetchExpertiseData() {
            try {
                const response = await conn.get("/listUserExpertises");
                setExpertiseData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao obter dados:", error);
                setLoading(false);
            }
        }
    
        fetchExpertiseData();
    }, []);    

    const renderChart = () => {
        if (loading) {
            return (
                <View>
                    <ActivityIndicator size="large" color={colors.vermelho} />
                </View>
            );
        }

        const labels = expertiseData.map(item => item.user_name);
        const datasets = [{
            data: expertiseData.map(item => item.expertise),
        }];

        return (
            <BarChart
                data={{ labels, datasets }}
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
                            backgroundColor: "#C74634",
                        }}
                    />
                )}
            />
        );
    };

    return (
        <View style={stylesChart.container}>
            {renderChart()}
        </View>
    );
}
