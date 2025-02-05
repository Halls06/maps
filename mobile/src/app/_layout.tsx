import { Loading } from "@/components/loading"
import { Stack } from "expo-router"


import {
    useFonts,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
} from "@expo-google-fonts/rubik"
import { Colors } from "@/styles/colors"

export default function Layout(){
    const [isLoading] = useFonts({
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_600SemiBold,
        Rubik_700Bold,
    })

    if (!isLoading) {
        return <Loading />
    }
    return <Stack screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: Colors.gray[100]}
    }} />
}