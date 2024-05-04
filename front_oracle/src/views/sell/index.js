import { SafeAreaView, ScrollView, View, Text } from "react-native";
import * as Components from "../../components/index";
import stylesSell from "./sell.styles";
import Connection from "../../connection";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import * as Styles from "../../styles/index";

export function Sell() {
    const conn = Connection();
    const testNumbers = [1, 2, 3, 4];
    const [userID, setUserID] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({
        question1: "",
        question2: "",
        question3: "",
    });
    const [expertiseUpdated, setExpertiseUpdated] = useState(false);
    const [errorOccurred, setErrorOccurred] = useState(false);

    useEffect(() => {
        const getUserID = async () => {
            try {
                const id = await AsyncStorage.getItem("userID");
                setUserID(id);
                console.log("ID do usuário:", id);
            } catch (error) {
                console.error("Erro ao recuperar o ID do usuário:", error);
            }
        };

        getUserID();

        setExpertiseUpdated(false);
        setErrorOccurred(false);
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            setExpertiseUpdated(false);
            setErrorOccurred(false);
        }, [])
    );

    const updtExpertise = async () => {
        try {
            for (const number of testNumbers) {
                const response = await conn.post("/updateTest", {
                    userId: userID,
                    trackId: 3,
                    testNumber: number,
                    testGrade: 25,
                });
                console.log("Resposta do back-end:", response.data);
            }
            setExpertiseUpdated(true);
            setErrorOccurred(false);
        } catch (error) {
            console.error("Erro ao atualizar expertise:", error);
            setExpertiseUpdated(false);
            setErrorOccurred(true);
        }
    };

    const handleOptionChange = (options) => {
        setSelectedOptions(options);
    };

    const handleClick = () => {
        const areAnswersCorrect =
            selectedOptions.question1 === "opcao1" &&
            selectedOptions.question2 === "opcao2" &&
            selectedOptions.question3 === "opcao3";

        if (areAnswersCorrect) {
            console.log("Respostas corretas");
            updtExpertise();
        } else {
            console.log("Respostas incorretas");
            setExpertiseUpdated(false);
            setErrorOccurred(true);
        }
    };

    return (
        <SafeAreaView style={stylesSell.background}>
            <ScrollView>
                <Components.Cabecalho titulo="Parceiro" />
                <View style={stylesSell.container}>
                    <Components.SubTituloVoltar titulo="Sell" />
                    <Components.FormSell onOptionChange={handleOptionChange} />
                    {expertiseUpdated && (
                        <Text style={{ color: Styles.colors.red }}>
                            Respostas corretas!
                        </Text>
                    )}
                    {errorOccurred && (
                        <Text style={{ color: Styles.colors.red }}>
                            Respostas incorretas. Tente novamente
                        </Text>
                    )}
                    <Components.Botao button="Enviar" onPress={handleClick} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}