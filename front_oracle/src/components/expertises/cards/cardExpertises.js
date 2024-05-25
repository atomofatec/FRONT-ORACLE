import { View, Text, TouchableOpacity } from "react-native";
import * as Styles from "../../../styles/index";
import { Ionicons } from "@expo/vector-icons";
import stylesCard from "./cardExpertises.styles";

export function CardExpertises({ expertise, handleNavigate }) {
    const { expertise_name, progress_percentage } = expertise; // Dados do usuário

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
                    <View>
                        <Text style={stylesCard.name}>{expertise_name}</Text>
                        <Text style={stylesCard.progress}>
                            {progress_percentage}%
                        </Text>
                    </View>
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