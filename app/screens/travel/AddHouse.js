import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddHouseForm from '../../components/travel/AddHouseForm'

export default function AddHouse() {
  return (
    <View>
      <AddHouseForm
        toastRef={toastRef}
        setLoading={setLoading}
      />
    </View>
  )
}

const styles = StyleSheet.create({})