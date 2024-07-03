import React, { useEffect, useState, useRef } from "react";
import {Linking, StyleSheet, View} from 'react-native';

import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import axios from 'axios';
import Toast from "react-native-toast-message";

export default function Map() {
    const [location, setLocation] = useState(null);
    const [pontosColeta, setPontosColeta] = useState([]);
    const mapRef = useRef(null);

    /* Iniciar o aplicativo com a localização da Faculdade Senac PE */
    const defaultLocation= {
        latitude: -8.05237,
        longitude: -34.88518,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                Toast.show({
                    type: 'error',
                    text1: 'Permissão negada - Localização',
                    text2: 'O app continuará a ser executado sem sua localização em tempo real',
                });
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);

            await Location.watchPositionAsync(
                {
                    accuracy: Location.Accuracy.High,
                    timeInterval: 1000,
                    distanceInterval: 1,
                },
                (newLocation) => {
                    setLocation(newLocation.coords);
                }
            );

        })();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.EXPO_PUBLIC_BACKEND_ADDRESS}/pontos/data`);
                setPontosColeta(response.data);
            } catch(error) {
                console.error(error);
            }
        };

        fetchData().then(() => console.log("Requested data"));
    }, [])

    useEffect(() => {
        if (location && mapRef.current) {
            mapRef.current.animateToRegion({
                latitude: location.latitude,
                longitude: location.longitude
            }, 1000);
        }
    }, [location]);

    const openInGoogleMaps = (latitude, longitude) => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&travelmode=driving`;
        Linking.openURL(url)
            .catch(error => console.error('Error opening Google Maps', error));
    }

    return (
        <View style={styles.container}>
            <Toast />
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={defaultLocation}
                showsUserLocation={true}
                followsUserLocation={true}
                zoomControlEnabled={true}
            >
                {pontosColeta.map((point, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: point.latitude, longitude: point.longitude }}
                        title={point.observacao}
                        description={`Endereço: ${point.endereco}, ${point.bairro}\n Tipos de resíduo: ${point.tiporesiduo}`}
                        pinColor={'#00FF00'}
                        onCalloutPress={() => openInGoogleMaps(point.latitude, point.longitude)}
                    />
                ))}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});