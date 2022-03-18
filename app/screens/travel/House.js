import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import MyCarousel from '../../utils/MyCarousel';

const screenWidth = Dimensions.get('window').width

export default function House(props) {
    const {navigation} = props
    const {images, place, location, address} = props.route.params.house
    useEffect(() => {
        navigation.setOptions({title: place})
    }, [])
    return (
        <ScrollView>
            <MyCarousel
                arrayImages={images}
                height={250}
                width={screenWidth}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({})