import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import stylesQualificadores from './qualificadores.styles';
import { CardQlt } from '../cardQlt';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Connection from '../../../connection';
import { ActivityIndicator } from 'react-native-paper';
import { colors } from "../../../styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BotaoQlf } from '../botao';


export function Qualificadores() {
    const expertise_id = 3
    const [qualificationData, setQualificationData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userID, setUserID] = useState(null);
    // const [expertise_id, setExpertiseID] = useState(null);
    const navigation = useNavigation();
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
    // const fetchExpertiseID = async () => {
    //     try {
    //         const id = await AsyncStorage.getItem("expertise_id");
    //         if (id !== null) {
    //             setExpertiseID(id);
    //         }
    //     } catch (error) {
    //         console.error("Error retrieving user ID:", error);
    //     }
    // };

    const fetchQualification = async () => {
        if (userID !== null) {
            try {
                const response = await conn.get(
                    `/expertises/1/users/3/qualifications`,
                );
                setQualificationData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching qualification:", error);
                setLoading(false); // Ensure loading is set to false even if there is an error
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(fetchUserID, 1000); // Verifica a cada segundo
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    useEffect(() => {
        fetchUserID(); // Chama fetchUserID quando o componente é montado
    }, []);
    // useEffect(() => {
    //     fetchExpertiseID(); // Chama fetchUserID quando o componente é montado
    // }, []);

    useEffect(() => {
        fetchQualification(); // Chama fetchQualification quando userID muda
    }, [userID]);

    useFocusEffect(
        React.useCallback(() => {
            fetchQualification(); // Atualiza as qualification ao focar na tela
        }, [userID]) // Reexecuta sempre que o userID mudar
    );

    const updateExpertise = async (qualificationData) => {

        try {
            const response = await conn.post("/userExpertises", {
                user_id: qualificationData.user_id,
                expertise_id: qualificationData.expertise_id
            });
            console.log(response.data);
        } catch (error) {
            console.error("Error updating qualification:", error);
        }
    };

    if (loading) {
        return (
            <View style={stylesQualificadores.loadingContainer}>
                <ActivityIndicator size="large" color={colors.vermelho} />
            </View>
        );
    }

    // console.log(userID);
     console.log(qualificationData);
   

    return (
        <View>
        <View style={stylesQualificadores.container}>
            {qualificationData.map((qualification) => (
                <CardQlt 
                key = {qualification.qualification_id}
                qualification={qualification}
                />   
            ))}
        </View>
        <BotaoQlf button="Salvar"  onPress = {updateExpertise}/>
        </View>
    );
}