import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Icon } from 'react-native-elements';

export default function Travel(props) {
  const { navigation, route } = props;
  const [user, setUser] = useState();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (userCredential) => {
      setUser(userCredential)
    })
  }, [])
  return (
    <View style={styles.container}>
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
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
  }
});
