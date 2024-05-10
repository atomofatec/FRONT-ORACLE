import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Styles from "../../../styles/index";
import stylesTracks from "./Tracks.styles";
import { useNavigation } from "@react-navigation/native";

export function Tracks() {
    const navigation = useNavigation();

    const trackOptions = ["Hardware", "Service", "Build", "Sell"];

    return (
        <View style={stylesTracks.container}>
            {trackOptions.map((track, index) => (
                <TouchableOpacity
                    key={index}
                    style={stylesTracks.itemContainer}
                    onPress={() => {
                        navigation.navigate("Expertises");
                    }}
                >
                    <View style={stylesTracks.containerUser}>
                        <View style={stylesTracks.textContainer}>
                            <Text style={stylesTracks.name} numberOfLines={1}>
                                {track}
                            </Text>
                            <Text style={stylesTracks.number}>
                                100%
                            </Text>
                        </View>
                        <Ionicons
                            name="chevron-forward-outline"
                            size={40}
                            color={Styles.colors.cinzaClaro}
                        />
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
}
