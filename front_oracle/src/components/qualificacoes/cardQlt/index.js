import { View, Text, TouchableOpacity } from "react-native";
import stylesCardQlt from "./cardQlt.styles";
import { Checkbox } from "react-native-paper";
import { useState, useEffect } from "react";
import Connection from "../../../connection";

export function CardQlt({ qualification }) {
    const conn = Connection();
    const { qualification_name, qualification_id, completed, user_id } =
        qualification; // Dados do usuário
    const [selectedOptions, setSelectedOptions] = useState({
        question1: completed ? ["opcao1"] : [],
    });

    useEffect(() => {
        setSelectedOptions({
            question1: completed ? ["opcao1"] : [],
        });
    }, [completed]);

    const handleOptionChange = async (questionNumber, option) => {
        if (completed) return; // Evita alterações se completed for true

        setSelectedOptions((prevState) => {
            const currentOptions = prevState[questionNumber];
            const isOptionSelected = currentOptions.includes(option);

            return {
                ...prevState,
                [questionNumber]: isOptionSelected
                    ? currentOptions.filter((opt) => opt !== option)
                    : [...currentOptions, option],
            };
        });

        try {
            const response = await conn.post("/userQualifications", {
                user_id: qualification.user_id,
                qualification_id: qualification.qualification_id,
            });
            console.log(response.data);
        } catch (error) {
            console.error("Error updating qualification:", error);
        }
    };

    return (
        <TouchableOpacity style={stylesCardQlt.container}>
            <View style={stylesCardQlt.containerUser}>
                <View style={stylesCardQlt.textContainer}>
                    <Text style={stylesCardQlt.name}>{qualification_name}</Text>
                </View>
            </View>
            <Checkbox
                status={
                    selectedOptions.question1.includes("opcao1")
                        ? "checked"
                        : "unchecked"
                }
                onPress={() => handleOptionChange("question1", "opcao1")}
                disabled={completed} // Desabilita o checkbox se completed for true
            />
        </TouchableOpacity>
    );
}
