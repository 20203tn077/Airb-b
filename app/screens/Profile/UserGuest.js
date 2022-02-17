import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import { Button } from "react-native-elements/dist/buttons/Button";

export default function UserGuest(props) {
    const { navigation } = props;
    return (
        <View style={styles.viewBody} centerContent={true}>
            <ScrollView>
                <Image
                    source={require("../../../assets/travel.jpg")}
                    resizeMode={'contain'}
                    style={styles.img}
                />
                <Text style={styles.title}>Consulta tu perfíl de Airbnb</Text>
                <Text style={styles.description}>¿Cómo decribirías tu mejor viaje? Busca y visualiza los mejores lugares para viajar, vota por el que te haya gustado más y comenta cómo te fue con tu experiencia</Text>
                <View style={styles.containerViewBtn}>
                    <Button
                        title="Iniciar sesión"
                        buttonStyle={styles.btn}
                        containerStyle={styles.btnContainer}
                        icon={{
                            name: 'sign-in',
                            type: 'font-awesome',
                            size: 15,
                            color: 'white'
                        }}
                        iconContainerStyle={{
                            marginRight: 10
                        }}
                        onPress={() => navigation.navigate("userLogin")}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        height: '100%',
    },
    viewBody: {
        marginHorizontal: 30,
    },
    img: {
        width: '100%',
        height: 300,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom: 16,
        textAlign: 'center',
    },
    description: {
        textAlign: 'center',
        marginBottom: 16,
    },
    containerViewBtn: {
        flex: 1,
        alignItems: 'center',
    },
    btn: {
        backgroundColor: '#ff5a60',
        color: '#fff'
    },
    btnContainer: {
        width: '70%'
    }
})