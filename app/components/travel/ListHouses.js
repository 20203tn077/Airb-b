import { StyleSheet, Text, View, ScrollView, FlatList, ActivityIndicator, Touchable } from 'react-native'
import React from 'react'
import { size } from 'lodash'
import { Icon, Image } from 'react-native-elements'

export default function ListHouses(props) {
    const { houses } = props
    return (
        <ScrollView>
            {size(houses) > 0 ? (
                <FlatList></FlatList>
            ): (
                <View>
                    <ActivityIndicator
                        size="large"
                        color="#ff5a60"
                    />
                </View>
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({})