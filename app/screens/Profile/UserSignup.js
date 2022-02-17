import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native-elements';
import { ScrollView } from 'react-native';
import SignupForm from '../../components/profile/SignupForm';
import { useNavigation } from '@react-navigation/native';

export default function UserSignup() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
          <Image
            source={require('../../../assets/logo_a.png')}
            resizeMode='contain'
            style={styles.img}
        />
        <SignupForm navigation={navigation}/>
      </ScrollView>
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