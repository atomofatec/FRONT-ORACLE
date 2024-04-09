import { View, SafeAreaView, ScrollView } from 'react-native';
import * as Components from "../../components/index"
import stylesCadastroParc from './cadastro_parc.styles';

export function CadastroParc() {
  return (
    <SafeAreaView style={stylesCadastroParc.background}>
      <ScrollView>
        <Components.Cabecalho titulo="Funcionário" />        
        <View style={stylesCadastroParc.container}>
          <Components.SubTitulo2 titulo="Cadastro de" subTitulo="Parceiros" />
          <Components.FormCad />
          <Components.ButtonSmall button="Cadastrar" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}