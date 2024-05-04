import React, { useState } from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import stylesFormBuil from "./formBuild.styles";
import { useFocusEffect } from "@react-navigation/native";

export function FormBuild({ onOptionChange }) {
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
        <View style={stylesFormBuil.container}>
            <Text style={stylesFormBuil.titleUser}>
                1.O que é Oracle Build?
            </Text>
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
                <Text>Uma plataforma de construção de aplicativos</Text>
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
                <Text>Um serviço de consultoria em nuvem</Text>
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
                <Text>Uma ferramenta de gestão de projetos</Text>
            </View>

            <Text style={stylesFormBuil.titleUser}>
                2.Qual é a principal função do Oracle Build?
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
                <Text>Desenvolver aplicativos móveis</Text>
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
                <Text>Automatizar processos de construção de software</Text>
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
                <Text>Fornecer hospedagem de sites</Text>
            </View>

            <Text style={stylesFormBuil.titleUser}>
                3.Qual dos seguintes não é um recurso comum do Oracle Build?
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
                <Text>Análise de mercado de ações</Text>
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
                <Text>Gerenciamento de requisitos</Text>
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
                <Text>Controle de versão de código-fonte</Text>
            </View>
        </View>
    );
}