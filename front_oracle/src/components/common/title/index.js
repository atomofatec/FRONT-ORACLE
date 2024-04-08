import { Text } from "react-native";
import stylesTitle from "./title.styles";

export function Title({ title }) {
    return (
        <Text style={stylesTitle.title}>{title}</Text>
    );
}
