import React, { useState } from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import stylesFormSell from "./formSell.styles";
import { useFocusEffect } from "@react-navigation/native";

export function FormSell({ onOptionChange }) {
    const [selectedOptions, setSelectedOptions] = useState({
        question1: "",
        question2: "",
        question3: "",
    });

    const handleOptionChange = (questionNumber, option) => {
        setSelectedOptions((prevState) => {
            const updatedOptions = {
                ...prevState,
                [questionNumber]: option,
            };
            // Chama a função de callback com as opções atualizadas
            onOptionChange(updatedOptions);
            return updatedOptions;
        });
    };

    // Limpa as opções selecionadas ao sair da tela
    useFocusEffect(
        React.useCallback(() => {
            return () => {
                setSelectedOptions({
                    question1: "",
                    question2: "",
                    question3: "",
                });
            };
        }, [])
    );

    return (
        <View style={stylesFormSell.container}>
            <Text style={stylesFormSell.titleUser}>1.O que é Oracle Sell?</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                    value="opcao1"
                    status={
                        selectedOptions.question1 === "opcao1"
                            ? "checked"
                            : "unchecked"
                    }
                    onPress={() => handleOptionChange("question1", "opcao1")}
                />
                <Text>Uma plataforma de gerenciamento de vendas</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                    value="opcao2"
                    status={
                        selectedOptions.question1 === "opcao2"
                            ? "checked"
                            : "unchecked"
                    }
                    onPress={() => handleOptionChange("question1", "opcao2")}
                />
                <Text>Um serviço de consultoria em marketing</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                    value="opcao3"
                    status={
                        selectedOptions.question1 === "opcao3"
                            ? "checked"
                            : "unchecked"
                    }
                    onPress={() => handleOptionChange("question1", "opcao3")}
                />
                <Text> Uma ferramenta de análise de dados</Text>
            </View>

            <Text style={stylesFormSell.titleUser}>
                2.Qual é o principal objetivo do Oracle Sell?
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                    value="opcao1"
                    status={
                        selectedOptions.question2 === "opcao1"
                            ? "checked"
                            : "unchecked"
                    }
                    onPress={() => handleOptionChange("question2", "opcao1")}
                />
                <Text>Automatizar processos de produção</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                    value="opcao2"
                    status={
                        selectedOptions.question2 === "opcao2"
                            ? "checked"
                            : "unchecked"
                    }
                    onPress={() => handleOptionChange("question2", "opcao2")}
                />
                <Text> Gerenciar relacionamentos com clientes</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                    value="opcao3"
                    status={
                        selectedOptions.question2 === "opcao3"
                            ? "checked"
                            : "unchecked"
                    }
                    onPress={() => handleOptionChange("question2", "opcao3")}
                />
                <Text>Fornecer serviços de hospedagem na nuvem</Text>
            </View>

            <Text style={stylesFormSell.titleUser}>
                3.Qual dos seguintes não é uma funcionalidade típica do Oracle
                Sell?
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                    value="opcao1"
                    status={
                        selectedOptions.question3 === "opcao1"
                            ? "checked"
                            : "unchecked"
                    }
                    onPress={() => handleOptionChange("question3", "opcao1")}
                />
                <Text>Rastreamento de leads</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                    value="opcao2"
                    status={
                        selectedOptions.question3 === "opcao2"
                            ? "checked"
                            : "unchecked"
                    }
                    onPress={() => handleOptionChange("question3", "opcao2")}
                />
                <Text>Automação de marketing por e-mail</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                    value="opcao3"
                    status={
                        selectedOptions.question3 === "opcao3"
                            ? "checked"
                            : "unchecked"
                    }
                    onPress={() => handleOptionChange("question3", "opcao3")}
                />
                <Text> Desenvolvimento de aplicativos móveis</Text>
            </View>
        </View>
    );
}