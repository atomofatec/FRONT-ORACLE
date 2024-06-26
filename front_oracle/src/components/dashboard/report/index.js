import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, TouchableOpacity, Alert } from "react-native";
import stylesReport from "./report.styles";
import Connection from "../../../connection";
import XLSX from 'xlsx';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

export function Report({ filtroTrackSelecionado }) {
    const conn = Connection();
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [filtroTrackSelecionado]);

    const fetchData = async () => {
        try {
            const response = await conn.get("/completionsCount");
            const responseData = response.data;
            setTableData(responseData);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };

    const exportToExcel = async () => {
        if (tableData.length === 0) {
            Alert.alert("Nenhum dado para exportar.");
            return;
        }

        const wsData = [
            ["Track", "Conclusões"],
            ...tableData.map(row => [
                row["Track Name"],
                row["Completions Count"]
            ])
        ];
        const ws = XLSX.utils.aoa_to_sheet(wsData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Relatório");

        const wbout = XLSX.write(wb, { type: 'base64', bookType: "xlsx" });

        // Diretório para salvar o arquivo temporariamente
        const directory = `${FileSystem.documentDirectory}excel_files/`;

        try {
            // Criar o diretório se ele não existir
            await FileSystem.makeDirectoryAsync(directory, { intermediates: true });
            
            // Caminho do arquivo
            const filePath = `${directory}relatorio.xlsx`;
            
            // Escrever o arquivo no sistema de arquivos
            await FileSystem.writeAsStringAsync(filePath, wbout, {
                encoding: FileSystem.EncodingType.Base64,
            });

            // Abrir o compartilhamento para compartilhar e baixar o arquivo
            await Sharing.shareAsync(filePath, { mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            
        } catch (error) {
            console.error("Erro ao exportar para Excel:", error);
            Alert.alert("Erro ao exportar para Excel.");
        }
    };

    return (
        <View>
            <View style={stylesReport.container}>
                <ScrollView horizontal={true}>
                    <View style={stylesReport.row}>
                        <View style={stylesReport.column}>
                            <Text style={stylesReport.title}>Track</Text>
                            {tableData.map((rowData, index) => (
                                <View key={index} style={stylesReport.row}>
                                    <Text style={stylesReport.text}>
                                        {rowData["Track Name"]}
                                    </Text>
                                </View>
                            ))}
                        </View>
                        <View style={stylesReport.column}>
                            <Text style={stylesReport.title}>Conclusões</Text>
                            {tableData.map((rowData, index) => (
                                <View key={index} style={[stylesReport.row, { paddingLeft: 50 }]}>
                                    <Text style={stylesReport.text}>
                                        {rowData["Completions Count"]}
                                    </Text>
                                </View>                            
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </View>
            <TouchableOpacity onPress={exportToExcel}>
                <Text style={stylesReport.exportar}>Exportar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Report;