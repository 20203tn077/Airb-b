import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useRef } from 'react';
import { Image } from 'react-native-elements';
import { ScrollView } from 'react-native';
import LoginForm from '../../components/profile/LoginForm';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-easy-toast';

export default function UserLogin() {
  const toastRef = useRef()
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
          <Image
            source={require('../../../assets/logo_a.png')}
            resizeMode='contain'
            style={styles.img}
        />
        <LoginForm navigation={navigation} toastRef={toastRef}/>
      </ScrollView>
      <Toast
        ref={toastRef}
        opacity={0, 9}
        position="center"
      />
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: '100%',
    },
    img: {
        width: '100%',
        height: 150,
        marginVertical: 20,
    }
});