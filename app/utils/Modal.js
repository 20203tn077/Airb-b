import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Overlay } from 'react-native-elements'
import MapView from 'react-native-maps';

export default function Modal(props) {
    const { isVisible, setIsVisible, children } = props;
    const closeModal = () => {
        setIsVisible(false)
    }
    return (
        <View>
            <Overlay
                isVisible={isVisible}
                windowBackgroundColor='rgba()'
                overlayBackgroundColor=''
                overlayStyle={styles.overlay}
                onBackdropPress={closeModal}
            >
                {children}
            </Overlay>
        </View>

    )
}

const styles = StyleSheet.create({
    overlay: {
        height: 'auto',
        width: '90%',
        backgroundColor: '#fff'
    }
})