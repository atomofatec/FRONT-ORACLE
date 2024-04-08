import { View, SafeAreaView, ScrollView, Text } from 'react-native';
import * as Components from "../../components/index";
import stylesCadFunc from './cad_funcionario.styles';
 
export function Cadastro() {
  return (
    <SafeAreaView style={stylesCadFunc.background}>
      <ScrollView>
        <Components.Cabecalho titulo="Administrador" />
               
      <View style={stylesCadFunc.container}>
      <Components.SubTitulo titulo="Cadastro de" subTitulo="Funcionários" />
        <Components.FormCad />
        <Components.CadastroButton titulo="Cadastrar" />
      </View>
 
      </ScrollView>
    </SafeAreaView>
  );
}