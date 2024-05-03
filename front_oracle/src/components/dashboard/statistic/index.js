import React from "react";
import { View, Text, ActivityIndicator, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Connection from "../../../connection";
import { colors } from "../../../styles";
import stylesStatistic from "./statistic.styles";

export function Statistic() {
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
