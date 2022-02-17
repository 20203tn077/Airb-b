import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Travel() {
  return (
    <View style={styles.container}>
      <Text>Viajes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
