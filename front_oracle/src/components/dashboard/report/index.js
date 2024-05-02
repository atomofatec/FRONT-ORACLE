import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import stylesReport from "./report.styles";

export class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        { user: 'Usuário 1', email: 'usuario1@email.com', product: 'Hardware' },
        { user: 'Usuário 2', email: 'usuario2@email.com', product: 'Service' },
        { user: 'Usuário 3', email: 'usuario3@email.com', product: 'Build' },
        { user: 'Usuário 4', email: 'usuario4@email.com', product: 'Sell' }
      ]
    }
  }

  render() {
    const { tableData } = this.state;
    return (
      <View>
        <View style={stylesReport.container}>
            <ScrollView>
            <View style={stylesReport.row}>
                <View style={[stylesReport.column, { flex: 2 }]}>
                <Text style={stylesReport.title}>Parceiro</Text>
                {tableData.map((rowData, index) => (
                    <View key={index} style={stylesReport.row}>
                    <View style={stylesReport.cell}>
                        <Text style={stylesReport.text}>{rowData.user}</Text>
                    </View>
                    <View style={stylesReport.cell}>
                        <Text style={stylesReport.text}>{rowData.email}</Text>
                    </View>
                    </View>
                ))}
                </View>
                <View style={[stylesReport.column, stylesReport.alignRight]}>
                    <Text style={stylesReport.title}>Produto</Text>
                    {tableData.map((rowData, index) => (
                        <View key={index} style={stylesReport.row}>
                            <View style={stylesReport.cell}>
                                <Text style={stylesReport.textProduct}>{rowData.product}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
            </ScrollView>
        </View>
        <Text style={stylesReport.exportar}>Exportar</Text>
      </View>
    )
  }
}

export default Report;
