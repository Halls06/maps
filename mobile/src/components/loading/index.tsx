import { View, ActivityIndicator, Text } from "react-native"

import { s } from "./styles"
import { Colors } from "@/styles/colors"

export function Loading(){
    return (
        <View style={s.container}>
            <ActivityIndicator size={"small"} color={Colors.gray[900]} />
            <Text style={s.title}>Carregando...</Text>
        </View>
    )
}