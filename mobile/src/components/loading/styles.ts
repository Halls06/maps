import { StyleSheet } from "react-native"
import { Colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 22,
        fontFamily: fontFamily.semibold,
        color: Colors.gray[900]
        
    }
})