import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Icon } from 'react-native-elements';
import ListHouses from '../components/travel/ListHouses';
import { useFocusEffect } from '@react-navigation/native';

export default function Travel(props) {
  const { navigation, route } = props;
  const [user, setUser] = useState();
  const [houses, setHouses] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (userCredential) => {
      setUser(userCredential)
    })
  }, [])
  
  useFocusEffect(
    useCallback(()=> {
      getHouses().then((response)=> {
        setHouses(response)
      })
    }, [])
  )

  const getHouses = async () => {
    const result = []
    const housesRef = collection(db, 'houses')
    const w = query(housesRef, orderBy('createAt)', 'desc'))
    const querySnapshot = await getDocs((doc) => {
      result.push(doc)
    })
    return result
  }
  return (
    <View style={styles.container}>
      <ListHouses houses={houses}/>
      {user && (
        <Icon
          reverse
          type='material-community'
          size={22}
          color="#ff5a60"
          containerStyle={styles.iconContainer}
          name="plus"
          onPress={() => navigation.navigate("addHouse")}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  iconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
  }
});
