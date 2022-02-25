import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Avatar } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth, updateProfile } from 'firebase/auth';
import Loading from '../../components/Loading';

export default function UserInfo(props) {
  const { infoUser: { uid, photoURL, displayName, email } } = props;
  const [loading, setLoading] = useState(false);
  console.log(props);
  const changeAvatar = async () => {
    const resultPermissions = await Permissions.askAsync(Permissions.CAMERA)
    if (resultPermissions.permissions.camera.status !== 'denied') {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4,4],
        quality: 1,
        base64: true
      })
      //console.log(result);
      if (!result.cancelled) {
        uploadImage(result.uri).then((result => {
          console.log('Bien hecho (:');
          uploadPhotoUrl()
        })).catch(err => console.log(err))
      } else {
        console.log("Es necesario seleccionar una imagen");
      }
    } else {

    } console.log('Es necesario aceptar los permisos');
  }

  const uploadImage = async (uri) => {
    setLoading(true);
    const response = await fetch(uri);
    const {_bodyBlob} = response;
    const storage = getStorage();
    const storageRef = ref(storage, `avatars/test${uid}`)
    return uploadBytes(storageRef, _bodyBlob)
  }

  const uploadPhotoUrl = () => {
    const storage = getStorage()
    getDownloadURL(ref(storage, `avatars/test${uid}`)).then((url) => {
      const auth = getAuth();
      updateProfile(auth.currentUser, {
        photoURL: url
      }).then(() => {
        setLoading(false)
        console.log("Foto de perfil actualizada");
      }).catch(() => {
        setLoading(false)
        console.log("No se actualizó :p");
      })
    }).catch((err) => {
      setLoading(false)
    })
  }

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size="large"
        containerStyle={styles.avatarContainer}
        source={photoURL ? { uri: photoURL } : require("../../../assets/logo_b.png")}
      >
        <Avatar.Accessory
          size={22} onPress={changeAvatar}
        />
      </Avatar>
      <View>
        <Text style={styles.displayName}>{displayName ? displayName : "Anónimo"}</Text>
        <Text>{email ? email : "Red social"}</Text>
      </View>
      <Loading
        isVisible={loading}
        text="Actualizando foto de perfil..."

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#FFF",
    paddingVertical: 30,
  },
  avatarContainer: {
    marginRight: 20,
  },
  displayName: {
    fontWeight: "bold",
    paddingBottom: 5,
  },

})