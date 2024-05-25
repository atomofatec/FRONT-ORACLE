import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import stylesReport from "./report.styles";
import Connection from "../../../connection";

export function Report({ filtroTrackSelecionado }) {
    const conn = Connection();
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [filtroTrackSelecionado]);

    // // Função para mapear os valores de track_id para os textos correspondentes
    // const getProductName = (trackId) => {
    //     switch (trackId) {
    //         case 1:
    //             return "Hardware";
    //         case 2:
    //             return "Service";
    //         case 3:
    //             return "Sell";
    //         default:
    //             return "";
    //     }
    // };

    const fetchData = async () => {
        try {
            const response = await conn.get("/completionsCount");
            const responseData = response.data;
            setTableData(responseData);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };

    return (
        <View>
            <View style={stylesReport.container}>
                <ScrollView horizontal={true}>
                    <View style={stylesReport.row}>
                        <View
                            style={[
                                stylesReport.column,
                                stylesReport.alignRight,
                            ]}
                        >
                            <Text
                                style={[
                                    stylesReport.title,
                                    { marginRight: 10 },
                                ]}
                            >
                                Track
                            </Text>
                            {tableData.map((rowData, index) => (
                                <View key={index} style={stylesReport.row}>
                                    <View
                                        style={[
                                            stylesReport.cell,
                                            { marginRight: 10 },
                                        ]}
                                    >
                                        <Text style={stylesReport.textProduct}>
                                            {rowData["Track Name"]}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                        <View
                            style={[
                                stylesReport.column,
                                stylesReport.alignRight,
                            ]}
                        >
                            <Text style={stylesReport.title}>Conclusões</Text>
                            {tableData.map((rowData, index) => (
                                <View key={index} style={stylesReport.row}>
                                    <View
                                        style={[
                                            stylesReport.cell,
                                            { marginRight: 30 },
                                        ]}
                                    >
                                        <Text style={stylesReport.textProduct}>
                                            {rowData["Completions Count"]}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </View>
            <Text style={stylesReport.exportar}>Exportar</Text>
        </View>
    );
}

export default Report;