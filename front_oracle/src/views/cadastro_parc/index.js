import { View, SafeAreaView, ScrollView } from "react-native";
import * as Components from "../../components/index";
import stylesCadastroParc from "./cadastro_parc.styles";
import mockedUsers from "../../utils/mocks";

export function CadastroParc() {
    const onAddUser = (newUser) => {
        mockedUsers.push(newUser); // Adicione o novo usuário à lista mockada
        console.log("Novo usuário adicionado:", newUser); // Exiba uma mensagem ou faça qualquer outra ação necessária após adicionar o usuário
    };

    return (
        <SafeAreaView style={stylesCadastroParc.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Funcionário" />
                <View style={stylesCadastroParc.container}>
                    <Components.SubTitulo2
                        titulo="Cadastro de"
                        subTitulo="Parceiros"
                    />
                    <Components.FormCadParc onAddUser={onAddUser} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}