import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserGuest from './Profile/UserGuest';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserLogged from './Profile/UserLogged';
import Loading from '../components/Loading';

export default function Profile(props) {
  const { navigation } = props;
  const [login, setLogin] = useState();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, [])
  if (login) {
    console.log("Sesión iniciada");
  }
  if (login === null) return <Loading
    isVisible={true} text="Cargando..."
  />
  return login ? (<UserLogged navigation={navigation}/>) : (<UserGuest navigation={navigation}/>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
