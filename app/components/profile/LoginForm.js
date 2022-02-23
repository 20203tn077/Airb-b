import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useRef } from 'react';
import { Input, Button, Icon } from 'react-native-elements';
import { isEmpty } from 'lodash';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Loading from '../Loading';
import Toast from "react-native-easy-toast";

export default function LoginForm(props) {
  const { navigation, toastRef } = props;
  const [showLoading, setShowLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const change = (event, type) => {
    setFormData({ ...formData, [type]: event.nativeEvent.text });
    console.log(formData);
  };
  const login = () => {
    console.log(formData);
    if (isEmpty(formData.email) || isEmpty(formData.password)) {
      setError({
        email: 'campo obligatorio',
        password: 'campo obligatorio'
      })
    } else {
      setError({
        email: '',
        password: ''
      });
      setShowLoading(true);
      const auth = getAuth();
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          navigation.navigate("profileStack");
          setShowLoading(false);
        })
        .catch((error) => {
          console.log('usuario y/o contraseña incorrectos');
          toastRef.current.show("usuario y/o contraseña incorrectos");
          setShowLoading(false);
        });
    }
  };
  const [error, setError] = useState({ email: '', password: '' });
  return (
    <View style={styles.container}>
      <Input
        placeholder='20183TI018@utez.edu.mx'
        keyboardType='email-address'
        rightIcon={
          <Icon
            type='material-community'
            name='email-outline'
            size={20}
            color='#ff5a60'
          />
        }
        label='Correo electrónico: *'
        containerStyle={styles.containerInput}
        labelStyle={styles.labelInput}
        onChange={(event) => change(event, 'email')}
        errorMessage={error.email}
      />
      <Input
        placeholder='*******'
        rightIcon={
          <Icon
            type='material-community'
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color='#ff5a60'
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        label='Contraseña: *'
        secureTextEntry={showPassword}
        containerStyle={styles.containerInput}
        labelStyle={styles.labelInput}
        onChange={(event) => change(event, 'password')}
        errorMessage={error.password}
      />
      <Button
        title='Iniciar sesión'
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        icon={
          <Icon
            name='sign-in'
            type='font-awesome'
            size={15}
            color='#fff'
          />
        }
        iconContainerStyle={{ marginHorizontal: 20 }}
        onPress={login}
      />
      <Text style={styles.textCreateAccount}
        onPress={() => navigation.navigate('userSignup')}
      >
        <Icon
          type='material-community'
          name='account-plus'
          size={16}
          color='#1E84b6'
        />
        Crear cuenta
      </Text>
      <Loading isVisible={showLoading} text="Cargando..."/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  containerInput: {
    width: '100%',
    marginBottom: 20,
  },
  labelInput: {
    fontSize: 20,
    color: '#ff5a60',
  },
  btnContainer: {
    width: '70%',
  },
  btn: {
    backgroundColor: '#ff5a60',
    color: '#fff'
  },
  textCreateAccount: {
    marginTop: 16,
    color: '#1E84b6'
  }
});