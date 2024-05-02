import React from "react";
import { View, Text } from "react-native";
import stylesStatistic from "./statistic.styles";

export function Statistic() {
    const build = 3;
    const parceiros = 20;
    const sell = 5;
    const service = 4;
    const hardware = 8;

    return (
        <View style={stylesStatistic.container}>
            {/* Linha 1 */}
            <View style={stylesStatistic.topRow}>
                <Text style={stylesStatistic.topText}>USUÁRIOS</Text>
            </View>
            {/* Linha 2 */}
            <View style={stylesStatistic.middleRow}>
                <Text style={stylesStatistic.numberleft}>{build}</Text>
                <Text style={stylesStatistic.empty}></Text>
                <Text style={stylesStatistic.number}>{parceiros}</Text>
                <Text style={stylesStatistic.empty}></Text>
                <Text style={stylesStatistic.numberright}>{sell}</Text>
            </View>
            <View style={stylesStatistic.middleRow}>
                <Text>Build</Text>
                <Text style={stylesStatistic.empty}></Text>
                <Text>Parceiros</Text>
                <Text style={stylesStatistic.empty}></Text>
                <Text>Sell</Text>
            </View>
            {/* Linha 3 */}
            <View style={stylesStatistic.bottomRow}>
                <Text style={stylesStatistic.empty}></Text>
                <Text style={stylesStatistic.number}>{service}</Text>
                <Text style={stylesStatistic.empty}></Text>
                <Text style={stylesStatistic.numberright}>{hardware}</Text>
                <Text style={stylesStatistic.empty}></Text>
            </View>
            <View style={stylesStatistic.bottomRow}>
                <Text style={stylesStatistic.empty}></Text>
                <Text>Service</Text>
                <Text style={stylesStatistic.empty}></Text>
                <Text>Hardware</Text>
                <Text style={stylesStatistic.empty}></Text>
            </View>
        </View>
    );
}
