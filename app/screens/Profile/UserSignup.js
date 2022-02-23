import { StyleSheet, Text, View } from 'react-native';
import React, {useRef} from 'react';
import { Image } from 'react-native-elements';
import { ScrollView } from 'react-native';
import SignupForm from '../../components/profile/SignupForm';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-easy-toast';


export default function UserSignup() {
  const navigation = useNavigation();
  const toastRef = useRef();
  return (
    <View style={styles.container}>
      <ScrollView>
          <Image
            source={require('../../../assets/logo_a.png')}
            resizeMode='contain'
            style={styles.img}
        />
        <SignupForm navigation={navigation} toastRef={toastRef}/>
      </ScrollView>
      <Toast
        ref={toastRef}
        opacity={0,9}
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