import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Styles from "../../../styles/index";
import stylesTracks from "./Tracks.styles";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Connection from '../../../connection';
import { ActivityIndicator } from 'react-native-paper';
import { colors } from "../../../styles";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Tracks() {
    const [trackData, setTrackData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userID, setUserID] = useState(null);
    const navigation = useNavigation();
    const conn = Connection();

    const fetchUserID = async () => {
        try {
            const id = await AsyncStorage.getItem("user_id");
            if (id !== null) {
                setUserID(id);
                console.log("User ID retrieved from AsyncStorage:", id);
            } else {
                console.log("No User ID found in AsyncStorage.");
            }
        } catch (error) {
            console.error("Error retrieving user ID from AsyncStorage:", error);
        }
    };

    const fetchTrack = async () => {
        if (userID !== null) {
            setLoading(true); // Começa a carregar antes de buscar os dados
            try {
                console.log(`Fetching tracks for user ID: ${userID}`);
                const response = await conn.get(`/users/${userID}/program-tracks`);
                console.log("Tracks fetched:", response.data);
                setTrackData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching tracks:", error.response ? error.response.data : error.message);
                setLoading(false);
            }
        } else {
            console.log("fetchTrack called but userID is null.");
        }
    };

    useEffect(() => {
        fetchUserID();
    }, []);

    useEffect(() => {
        if (userID !== null) {
            fetchTrack();
        }
    }, [userID]);

    useFocusEffect(
        React.useCallback(() => {
            if (userID !== null) {
                fetchTrack();
            }
        }, [userID])
    );

    if (loading) {
        return (
            <View style={stylesTracks.loadingContainer}>
                <ActivityIndicator size="large" color={colors.vermelho} />
            </View>
        );
    }

    return (
        <View style={stylesTracks.container}>
            {trackData.length > 0 ? (
                trackData.map((track, index) => (
                    <TouchableOpacity
                        key={index}
                        style={stylesTracks.itemContainer}
                        onPress={() => {
                            navigation.navigate("Tracks");
                        }}
                    >
                        <View style={stylesTracks.containerUser}>
                            <View style={stylesTracks.textContainer}>
                                <Text style={stylesTracks.name} numberOfLines={1}>
                                    {track.track_name}
                                </Text>
                            </View>
                            <Ionicons
                                name="chevron-forward-outline"
                                size={40}
                                color={Styles.colors.cinzaClaro}
                            />
                        </View>
                    </TouchableOpacity>
                ))
            ) : (
                <Text>Nenhuma track disponível</Text>
            )}
        </View>
    );
}
