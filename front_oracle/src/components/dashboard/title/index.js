import { Text } from "react-native";
import stylesTitleDash from "./titleDash.styles";

export function TitleDash({ title }) {
    return (
        <Text style={stylesTitleDash.title}>{title}</Text>
    );
}
