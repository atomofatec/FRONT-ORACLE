import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import stylesList from "./listaExpertises.styles";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Connection from "../../../connection";
import { colors } from "../../../styles";
import { CardExpertises } from "../cards/cardExpertises";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BotaoQlf } from "../../qualificacoes/botao";

export function ListaExpertises() {
    const [track_id, setTrackID] = useState(null);
    const [expertisesData, setExpertisesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userID, setUserID] = useState(null);
    const navigation = useNavigation();
    const conn = Connection();

    console.log(track_id)

    const fetchUserID = async () => {
        try {
            const id = await AsyncStorage.getItem("user_id");
            if (id !== null) {
                setUserID(id);
            }
        } catch (error) {
            console.error("Error retrieving user ID:", error);
        }
    };

    const fetchTrackID = async () => {
        try {
            const id = await AsyncStorage.getItem("track_id");
            if (id !== null) {
                setTrackID(id);
            }
        } catch (error) {
            console.error("Error retrieving track ID:", error);
        }
    };

    const fetchExpertises = async () => {
        if (userID && track_id !== null) {
            try {
                const response = await conn.post(
                    `/expertiseProgressByUserAndTrack`,
                    {
                        user_id: userID,
                        track_id: track_id,
                    }
                );
                setExpertisesData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching expertises:", error);
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(fetchUserID, 1000); // Verifica a cada segundo
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    useEffect(() => {
        const interval = setInterval(fetchTrackID, 1000); // Verifica a cada segundo
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    useEffect(() => {
        fetchUserID(); // Chama fetchUserID quando o componente é montado
    }, []);

    useEffect(() => {
        fetchTrackID(); // Chama fetchUserID quando o componente é montado
    }, []);

    useEffect(() => {
        fetchExpertises(); // Chama fetchExpertises quando userID muda
    }, [userID, track_id]);

    useFocusEffect(
        React.useCallback(() => {
            fetchExpertises(); // Atualiza as expertises ao focar na tela
        }, [userID, track_id]) // Reexecuta sempre que o userID mudar
    );

    const updateTrack = async () => {
        try {
            const response = await conn.post("/userTracks", {
                user_id: userID,
                expertise_id: track_id,
            });
            console.log(response.data);
        } catch (error) {
            console.error("Error updating qualification:", error);
        }
    };

    if (loading) {
        return (
            <View style={stylesList.loadingContainer}>
                <ActivityIndicator size="large" color={colors.vermelho} />
            </View>
        );
    }

    // console.log(userID);
    // console.log(expertisesData);

    return (
        <View>
            <View style={stylesList.container}>
                {expertisesData.map((expertise) => (
                    <CardExpertises
                        key={expertise.expertise_id}
                        expertise={expertise}
                        handleNavigate={() => {
                            AsyncStorage.setItem(
                                "expertise_id",
                                expertise.expertise_id.toString()
                            );
                            navigation.navigate("Qualificacoes");
                        }}
                    />
                ))}
            </View>
            <BotaoQlf button="Salvar" onPress={updateTrack} />
        </View>
    );
}