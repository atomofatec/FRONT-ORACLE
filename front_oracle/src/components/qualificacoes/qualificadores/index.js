import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import stylesQualificadores from "./qualificadores.styles";
import { CardQlt } from "../cardQlt";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Connection from "../../../connection";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../../../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BotaoQlf } from "../botao";

export function Qualificadores() {
    const [qualificationData, setQualificationData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userID, setUserID] = useState(null);
    const [expertise_id, setExpertiseID] = useState(null);
    const conn = Connection();

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
    const fetchExpertiseID = async () => {
        try {
            const id = await AsyncStorage.getItem("expertise_id");
            if (id !== null) {
                setExpertiseID(id);
            }
        } catch (error) {
            console.error("Error retrieving user ID:", error);
        }
    };

    useEffect(() => {
        const interval = setInterval(fetchUserID, 1000); // Verifica a cada segundo
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    useEffect(() => {
        const interval = setInterval(fetchExpertiseID, 1000); // Verifica a cada segundo
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    useEffect(() => {
        fetchUserID(); // Chama fetchUserID quando o componente é montado
    }, []);

    useEffect(() => {
        fetchExpertiseID(); // Chama fetchUserID quando o componente é montado
    }, []);

    // console.log(userID);
    // console.log(expertise_id);

    const fetchQualification = async () => {
        if (userID && expertise_id !== null) {
            try {
                const response = await conn.get(
                    `/expertises/${expertise_id}/users/${userID}/qualifications`
                );
                setQualificationData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching qualification:", error);
            }
        }
    };

    const updateExpertise = async () => {
        try {
            const response = await conn.post("/userExpertises", {
                user_id: userID,
                expertise_id: expertise_id,
            });
            console.log(response.data);
        } catch (error) {
            console.error("Error updating qualification:", error);
        }
    };

    // console.log(qualificationData.expertise_id)
    // console.log(qualificationData.user_id)
    // console.log(qualificationData)

    useEffect(() => {
        fetchQualification(); // Chama fetchQualification quando userID muda
    }, [userID, expertise_id]);

    useFocusEffect(
        React.useCallback(() => {
            fetchQualification(); // Atualiza as qualification ao focar na tela
        }, [userID, expertise_id]) // Reexecuta sempre que o userID mudar
    );

    if (loading) {
        return (
            <View style={stylesQualificadores.loadingContainer}>
                <ActivityIndicator size="large" color={colors.vermelho} />
            </View>
        );
    }

    // console.log(userID);
    //  console.log(qualificationData);

    return (
        <View>
            <View style={stylesQualificadores.container}>
                {qualificationData.map((qualification) => (
                    <CardQlt
                        key={qualification.qualification_id}
                        qualification={qualification}
                    />
                ))}
            </View>
            <BotaoQlf button="Salvar" onPress={updateExpertise} />

        </View>
    );
}