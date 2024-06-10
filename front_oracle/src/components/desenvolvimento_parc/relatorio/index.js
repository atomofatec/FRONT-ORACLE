import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import stylesRelatorio from './relatorio.styles';

export class Relatorio extends Component {
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
        <View style={stylesRelatorio.container}>
            <ScrollView>
            <View style={stylesRelatorio.row}>
                <View style={[stylesRelatorio.column, { flex: 2 }]}>
                <Text style={stylesRelatorio.title}>Parceiro</Text>
                {tableData.map((rowData, index) => (
                    <View key={index} style={stylesRelatorio.row}>
                    <View style={stylesRelatorio.cell}>
                        <Text style={stylesRelatorio.text}>{rowData.user}</Text>
                    </View>
                    <View style={stylesRelatorio.cell}>
                        <Text style={stylesRelatorio.text}>{rowData.email}</Text>
                    </View>
                    </View>
                ))}
                </View>
                <View style={[stylesRelatorio.column, stylesRelatorio.alignRight]}>
                    <Text style={stylesRelatorio.title}>Produto</Text>
                    {tableData.map((rowData, index) => (
                        <View key={index} style={stylesRelatorio.row}>
                            <View style={stylesRelatorio.cell}>
                                <Text style={stylesRelatorio.textProduct}>{rowData.product}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
            </ScrollView>
        </View>
      </View>
    )
  }
}

export default Relatorio;