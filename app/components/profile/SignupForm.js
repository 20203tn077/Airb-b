import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Input, Button, Icon } from 'react-native-elements';
import { isEmpty } from 'lodash';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignupForm(props) {
    const { navigation } = props;
    const [showPassword, setShowPassword] = useState(true);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(true);
    const [formData, setFormData] = useState({ email: '', password: '', passwordConfirm: '' });
    const [error, setError] = useState({ email: '', password: '', passwordConfirm: '' });
    const change = (event, type) => {
        setFormData({ ...formData, [type]: event.nativeEvent.text });
        console.log(formData);
    };
    const signup = () => {
        console.log(formData);
        let invalid = false;
        if (isEmpty(formData.email)) {
            console.log("holaaa");
            setError({ ...error, email: 'campo obligatorio' });
            invalid = true;
        } else setError({ ...error, email: '' });
        if (isEmpty(formData.password)) {
            setError({ ...error, password: 'campo obligatorio' });
            invalid = true;
        } else if (formData.password.length < 6) {
            setError({ ...error, password: 'mínimo 6 caracteres' });
            invalid = true;
        } else setError({ ...error, email: '' });
        if (isEmpty(formData.passwordConfirm)) {
            setError({ ...error, passwordConfirm: 'campo obligatorio' });
            invalid = true;
        } else if (formData.passwordConfirm != formData.password) {
            setError({ ...error, passwordConfirm: 'las contraseñas no coinciden' });
            invalid = true;
        } else setError({ ...error, email: '' });
        if (!invalid) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, formData.email, formData.password)
                .then((userCredential) => {
                    navigation.navigate("profileStack");
                })
                .catch((error) => {
                    console.log('Falló al registrar');
                });
        }
    };
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
            <Input
                placeholder='*******'
                rightIcon={
                    <Icon
                        type='material-community'
                        name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                        size={20}
                        color='#ff5a60'
                        onPress={() => setShowPassword(!showPasswordConfirm)}
                    />
                }
                label='Confirmar contraseña: *'
                secureTextEntry={showPassword}
                containerStyle={styles.containerInput}
                labelStyle={styles.labelInput}
                onChange={(event) => change(event, 'passwordConfirm')}
                errorMessage={error.passwordConfirm}
            />
            <Button
                title='Registrar'
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
                onPress={signup}
            />
            <Text style={styles.textCreateAccount}>
                <Icon
                    type='material-community'
                    name='account-plus'
                    size={16}
                    color='#1E84b6'
                />
                Crear cuenta
            </Text>
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