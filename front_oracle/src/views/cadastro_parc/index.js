import { View, SafeAreaView, ScrollView, Text } from 'react-native';
import * as Components from "../../components/index"
import stylesCadastroParc from './cadastro_parc.styles';


export function CadastroParc() {
  return (
    <SafeAreaView style={stylesCadastroParc.background}>
      <ScrollView>
        <Components.Cabecalho titulo="Funcionário" />        
      <View style={stylesCadastroParc.container}>
        <Components.SubTitulo titulo="Cadastro de Parceiros" />
        <Components.Formulario />
        <Components.CadastroButton titulo="Cadastrar" />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}