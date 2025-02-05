import { Colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: "100%",
        flexGrow: 1,
    },
    marker: {
        width: 44,
        height: 44,
        backgroundColor: Colors.gray[900],
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    }
})