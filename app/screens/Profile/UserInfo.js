import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-elements';

export default function UserInfo(props) {
  const {infoUser: {uid, photourl, displayName, email}} = props;
  console.log(props);
  return (
    <View>
        <Avatar
            rounded
            size="large"
            containerStyle={styles.avatarContainer}
            source={photourl ? {uri: photourl}: require("../../../assets/logo_b.png")}
        >
            <Avatar.Accessory
                size={22} onPress={() => console.log("holi")}
            />
        </Avatar>
      <Text>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

})