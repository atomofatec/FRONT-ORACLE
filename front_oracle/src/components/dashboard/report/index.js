import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Connection from "../../../connection";
import { colors } from "../../../styles";
import stylesReport from "./report.styles";

export function Report() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const conn = Connection();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await conn.get("/listUserExpertises");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <View style={stylesReport.loadingContainer}>
        <ActivityIndicator size="large" color={colors.vermelho} />
      </View>
    );
  }

  return (
    <View>
        <View style={stylesReport.container}>
        <ScrollView>
            <View style={stylesReport.row}>
            <View style={[stylesReport.column, { flex: 2 }]}>
                <Text style={stylesReport.title}>Parceiro</Text>
                {users.map((user) => ( 
                <View key={user.user_id} style={stylesReport.row}>
                    <View style={stylesReport.cell}>
                    <Text style={stylesReport.text}>{user.user_name}</Text>
                    </View>
                </View>
                ))}
            </View>
            <View style={[stylesReport.column, stylesReport.alignRight]}>
                <Text style={stylesReport.title}>Produto</Text>
                {users.map((user) => ( 
                <View key={user.user_id} style={stylesReport.row}>
                    <View style={stylesReport.cell}>
                    <Text style={stylesReport.textProduct}>{user.expertise}</Text>
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
