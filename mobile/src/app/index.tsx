import { useEffect, useState, useRef } from "react";
import { Alert, View } from "react-native";
import {FontAwesome} from "@expo/vector-icons"


import * as Location from "expo-location" 
import MapView, { Marker, Polyline } from "react-native-maps";
import { GooglePlacesAutocomplete} from "react-native-google-places-autocomplete"
import MapViewDirections from "react-native-maps-directions";


import { s } from "./styles";
import { Colors } from "@/styles/colors";


type CoordsProps = {
    latitude: number;
    longitude: number;
}


export default function Index(){


    const [currentLocation, setCurrentLocation] = useState<CoordsProps | null>(null)
    const [coords, setCoords] = useState<CoordsProps[]>([])
    const [destination, setDestination] = useState<CoordsProps | null>(null)


    const mapRef = useRef<MapView>(null)

    useEffect(() => {
        let subscription: Location.LocationSubscription;

        Location.requestForegroundPermissionsAsync()
        .then(({ status }) => {
            if (status !== 'granted') {
                Alert.alert("Habilite a permissao para obter a localizacao!")
                return; 
            }

            Location.watchPositionAsync({
                accuracy: Location.LocationAccuracy.High,
                timeInterval: 1000,
                distanceInterval: 1
            }, (location) => {
                setCurrentLocation(location.coords)
                setCoords((prevState) =>  [...prevState, location.coords])
            }).then((response) => subscription = response)
        })

        return () => {
            if (subscription) {
                subscription.remove()
            }
        }

    },[])

    return (
        <View style={s.container}>
            <GooglePlacesAutocomplete
            styles={{container: s.searchContainer, textInput: s.searchInput}}
            placeholder="Para onde?"
            fetchDetails={true}
            GooglePlacesDetailsQuery={{fields: "geometry"}}
            enablePoweredByContainer={false}
            query={{
                // key: 'AQUI VAI A CHAVE DA API', 
                language: ''
            }}
            // onFail={console.log} AQUI MOSTRA SE TIVER ALGUM ERROR
            onPress={(data, datails) => {
                setDestination({
                    latitude: datails?.geometry?.location.lat ?? 0,
                    longitude: datails?.geometry?.location.lng ?? 0
                })
            }}
            />
            {
                currentLocation &&
            <MapView
            ref={mapRef}
            style={s.map}
            initialRegion={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
            >

            <Marker  
            identifier="origin"
            coordinate={currentLocation}>

                <View style={s.marker}>
                    <FontAwesome name="fa" size={24} color={Colors.gray[100]} />
                </View>

            </Marker>

            {destination && <Marker identifier="desnation" coordinate={destination}/>}

            <Polyline
              coordinates={coords}
              strokeColor="black"
              strokeWidth={7}
            />

            {
                <MapViewDirections
                origin={currentLocation}
                destination={destination}
                //  apikey="" Aqui vai a chave da API
                strokeColor="black"
                strokeWidth={7}
                lineDashPattern={[0]}
                onReady={(result) => {
                mapRef.current?.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                        top: 124,
                        bottom: 24,
                        left: 24,
                        right: 24,
                    }
                })
                }}
                 />
            }
            </MapView>
}
        </View>
    )
}