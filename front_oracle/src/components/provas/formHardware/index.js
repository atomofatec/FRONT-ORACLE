import React, { useState } from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import stylesFormHardware from "./formHardware.styles";

export function FormHardware({ onOptionChange }) {
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
        <View style={stylesFormHardware.container}>
            <Text style={stylesFormHardware.titleUser}>
                1. Qual dos seguintes componentes é responsável pelo
                processamento de dados em um computador?
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
                <Text>Placa de vídeo</Text>
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
                <Text>CPU (Unidade de Processamento Central)</Text>
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
                <Text>Disco rígido</Text>
            </View>

            <Text style={stylesFormHardware.titleUser}>
                2. Qual é a função principal da memória RAM em um computador?
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
                <Text>Armazenar permanentemente dados e programas.</Text>
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
                <Text>Processar gráficos e imagens.</Text>
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
                <Text>
                    Armazenar temporariamente dados e instruções para o
                    processador.
                </Text>
            </View>

            <Text style={stylesFormHardware.titleUser}>
                3. Qual dos seguintes dispositivos é usado principalmente para
                armazenar dados permanentemente em um computador?
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
                <Text>Disco rígido</Text>
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
                <Text>Memória RAM</Text>
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
                <Text>CPU (Unidade de Processamento Central)</Text>
            </View>
        </View>
    );
}