import { View, SafeAreaView, ScrollView, Text } from 'react-native';
import * as Components from "../../components/index"
import stylesCadastroParc from './cadastro_parc.styles';


export function CadastroParc() {
  return (
    <SafeAreaView style={stylesCadastroParc.background}>
            <ScrollView>
                <Components.Cabecalho />
                <Components.Titulo />
                <View style={stylesCadastroParc.container}>
              
                </View>
            </ScrollView>
    </SafeAreaView>
  );
}