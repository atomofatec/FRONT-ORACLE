import { View, Text } from "react-native";
import * as Styles from "../../../styles/index";
import { CardUsers } from "../cards/cardUsers";
import mockedUsers from "../../../utils/mocks";
import stylesList from "./listaUsers.styles";

export function ListaUsers() {
    const data = mockedUsers;

    return (
        <View>
            <View style={stylesList.containerTitle}>
                <Text style={stylesList.texto}>Lista de usuários registrados ({data.length})</Text>
            </View>
            <View style={stylesList.container}>
                {data.map((user) => (
                    <CardUsers
                        key={user.id}
                        user={user}
                        handleNavigation={() => console.log("andou")}
                    />
                ))}
            </View>
        </View>
    );
}