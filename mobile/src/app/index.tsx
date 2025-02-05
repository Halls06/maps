import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import {FontAwesome} from "@expo/vector-icons"

import { s } from "./styles";
import { Colors } from "@/styles/colors";

export default function Index(){
    return (
        <View style={s.container}>
            <MapView
            style={s.map}
            initialRegion={{
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
            >

            <Marker 
            identifier="origin"
            coordinate={{
                latitude: 0,
                longitude: 0,
            }}>

                <View style={s.marker}>
                    <FontAwesome name="fa" size={24} color={Colors.gray[100]} />
                </View>

            </Marker>
            </MapView>
        </View>
    )
}