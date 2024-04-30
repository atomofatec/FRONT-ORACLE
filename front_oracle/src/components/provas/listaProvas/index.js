import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Styles from "../../../styles/index";
import stylesListaProvas from "./listaProvas.styles";

export function ListaProvas({ navigation }) {

    return (
        <View style={stylesListaProvas.container}>
            <TouchableOpacity style={stylesListaProvas.itemContainer} onPress={() => {navigation.navigate('Hardware')}} >
                <View style={stylesListaProvas.containerUser}>
                    <View style={stylesListaProvas.textContainer}>
                        <Text style={stylesListaProvas.name} numberOfLines={1}>Hardware</Text>
                        <Text style={stylesListaProvas.email}>Realizar prova de Hardware</Text>
                    </View>
                    <Ionicons
                        name="chevron-forward-outline"
                        size={40}
                        color={Styles.colors.cinzaClaro}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={stylesListaProvas.itemContainer}>
                <View style={stylesListaProvas.containerUser}>
                    <View style={stylesListaProvas.textContainer}>
                        <Text style={stylesListaProvas.name} numberOfLines={1}>Service</Text>
                        <Text style={stylesListaProvas.email}>Realizar prova de Service</Text>
                    </View>
                    <Ionicons
                        name="chevron-forward-outline"
                        size={40}
                        color={Styles.colors.cinzaClaro}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={stylesListaProvas.itemContainer}>
                <View style={stylesListaProvas.containerUser}>
                    <View style={stylesListaProvas.textContainer}>
                        <Text style={stylesListaProvas.name} numberOfLines={1}>Build</Text>
                        <Text style={stylesListaProvas.email}>Realizar prova de Build</Text>
                    </View>
                    <Ionicons
                        name="chevron-forward-outline"
                        size={40}
                        color={Styles.colors.cinzaClaro}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={stylesListaProvas.itemContainer}>
                <View style={stylesListaProvas.containerUser}>
                    <View style={stylesListaProvas.textContainer}>
                        <Text style={stylesListaProvas.name} numberOfLines={1}>Sell</Text>
                        <Text style={stylesListaProvas.email}>Realizar prova de Sell</Text>
                    </View>
                    <Ionicons
                        name="chevron-forward-outline"
                        size={40}
                        color={Styles.colors.cinzaClaro}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}
