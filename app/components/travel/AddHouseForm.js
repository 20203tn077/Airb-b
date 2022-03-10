import { StyleSheet, Text, View, Alert, ScrollView, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Input, Button, Divider, Icon, Avatar, Image } from 'react-native-elements';
import { map, size, filter } from 'lodash';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { async } from '@firebase/util';

const widthScreen = Dimensions.get("Window".width);

export default function AddHouseForm(props) {
    const { toastRef, setLoading } = props;
    const [isVisibleMap, setIsVisibleMap] = useState(false);
    const [imageSelected, setImageSelected] = useState([]);
    const [place, setPlace] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [locationHouse, setLocationHouse] = useState(null);
    const [error, setError] = useState({ camera: '', place: '', address: '', description: '' });
    return (
        <ScrollView>
            <ImagePreview
                imageSelected={imageSelected}
            />
            <UploadImage
                toastRef={toastRef}
                setImageSelected={setImageSelected}
                imageSelected={imageSelected}
                error={error}
            />
        </ScrollView>
    )
}

function ImagePreview(props) {
    const { imageSelected } = props;
    return (
        <View>
            <Image
                source={size(imageSelected) ?
                    { uri: imageSelected[0] } :
                    require('../../../assets/logo_a.png')}
                style={{ width: widthScreen, height: 200 }}
            />
        </View>
    )
}

function UploadImage(props) {
    const { toastRef, imageSelected, setImageSelected, error } = props

    const addImage = async () => {
        const resultPermission = await ImagePicker.requestCameraPermissionsAsync()
        if (resultPermission.status !== 'denied') {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [3, 2]
            })
            if (!result.cancelled) {
                setImageSelected([...imageSelected, result.uri]);
            } else {
                toastRef.current.show('has cerrado la galería');
            }
        } else {
            toastRef.current.show('es necesario aceptar los permisos de cámara', 4000)
        }
    }

    const removeImage = () => {
        Alert.alert(
            'Eliminar imagen',
            '¿Estás seguro de eliminar la imagen?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Eliminar',
                    style: 'destructive',
                    onPress: () => {
                        setImageSelected(filter(imageSelected, (imageUri) => imageUri !== Image))
                    }
                },
            ]
        )
    }

    return (
        <View style={styles.viewUploadImage}>
            {size(imageSelected) < 5 && (
                <Icon
                    type='material-community'
                    name='camera'
                    color='#7a7a7a'
                    containerStyle={styles.iconUploadImage}
                    onPress={addImage}
                    errorMessage={error.camera}
                />
            )}
            {map(imageSelected, (image, index) => (
                <Avatar
                    key={index}
                    style={styles.miniatureImage}
                    source={{ uri: image }}
                    onPress={() => removeImage(image)}
                />
            ))}
            <View Style={{ flex: 1, alignItems: 'center', marginTop: 3 }}>
                <Divider style={styles.divider} />
            </View>
            <View>
                <Button
                    title='Cancelar'
                    containerStyle={styles.btnContainer}
                    buttonStyle={styles.btnStyleCancel}
                    onPress={() => setIsVisibleMap(false)}
                />
                <Button
                    title='Guardar ubicación'
                    containerStyle={styles.btnContainer}
                    buttonStyle={styles.btnStyleSave}
                    onPress={() => setIsVisibleMap(false)}
                />
            </View>
        </View>
    )
}

function Map(props) {
    const {isVisible, setIsVisibleMap, toastRef, setLocationHouse} = props;
    const [location, setLocation] = useState();

    useEffect(() => {
        (async () => {
            const resultPermission = await Location.requestForegroundPermissionsAsync()
            if (resultPermission.status === 'granted') {
                let loc = await Location.getCurrentPositionAsync({})
                setLocation({
                    latitude: loc.coords.latitude,
                    longitude: loc.coords.longitude,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001
                })
            } else {
                toastRef.current.show('Es necesario aceptar los permisos de unicación')
            }
        }) ()
    }, [])
    const confirmLocation = () => {
        setLocationHouse(location)
        toastRef.current.show('Ubicación guardada')
        setIsVisibleMap(false)
    }
    
    return (
        <Modal isVisible={isVisibleMap} setIsVisible={setIsVisibleMap}>
            <View>
                {location && (
                    <MapView
                        style={styles.map}
                        initialRegion={location}
                        showsUserLocation={true}
                        onRegionChange={(region) => setLocation(region)}
                    >
                        <MapView.Marker
                            coordinate={{
                                latitude: location.latitude,
                                longitude: location.longitude
                            }}
                            draggable
                        />
                    </MapView>
                )}    
            </View>    
        </Modal>
    
    )
}

const styles = StyleSheet.create({
    viewUploadImage: {
        flexDirection: 'row',
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20,
    },
    iconUploadImage: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        height: 70,
        width: 70,
        backgroundColor: '#e3e3e3'
    },
    miniatureImage: {
        width: 70,
        height: 70,
        marginRight: 10,
    }
})