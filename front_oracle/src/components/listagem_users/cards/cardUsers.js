import { View, Text, TouchableOpacity } from "react-native";
import * as Styles from "../../../styles/index";
import { Ionicons } from "@expo/vector-icons";
import stylesCard from "./cardUsers.styles";

export function CardUsers({ user, handleNavigate }) {
    const { user_name, email } = user; // Dados do usuário

    return (
        <TouchableOpacity style={stylesCard.container} onPress={handleNavigate}>
            <View style={stylesCard.containerUser}>
                <TouchableOpacity>
                    <Ionicons
                        name="person-circle"
                        size={40}
                        color={Styles.colors.vermelho}
                    />
                </TouchableOpacity>

                <View style={stylesCard.textContainer}>
                    <Text style={stylesCard.name} numberOfLines={1}>
                        {user_name}
                    </Text>
                    <Text style={stylesCard.email}>{email}</Text>
                </View>
                <Ionicons
                    name="chevron-forward-outline"
                    size={40}
                    color={Styles.colors.cinzaClaro}
                />
            </View>
        </TouchableOpacity>
    );
}