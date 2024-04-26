import React from "react";
import { View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import stylesChart from "./chart.styles";

export function Chart() {
    const data = {
        labels: ["Build", "Service", "Hardware", "Sell"],
        datasets: [
            {
                data: [3, 4, 8, 5],
            },
        ],
    };

    const barColors = ['#C74634', '#C74634', '#C74634', '#C74634'];

    return (
        <View style={stylesChart.container}>
            <BarChart
                data={data}
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
        </View>
    );
}
