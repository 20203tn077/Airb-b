import { StyleSheet, Text, View, ScrollView, FlatList, ActivityIndicator, Touchable } from 'react-native'
import React from 'react'
import { size } from 'lodash'
import { Icon, Image } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ListHouses(props) {
    
    const { houses } = props
    return (
        <ScrollView>
            {size(houses) > 0 ? (
                <FlatList
                data={houses}
                renderItem={(house) => <House house={house}/>}
                keyExtractor={(item, index) => index.toString}
                
                ></FlatList>
            ) : (
                <View style={styles.loaderHouses}>
                    <ActivityIndicator
                        size="large"
                        color="#ff5a60"
                    />
                    <Text>Cargando condominios</Text>
                </View>
            )}
        </ScrollView>
    )
}

function House() {
    const { house } = props
    const { id, images, place, description, address } = house.item
    const imageHouses = images[0]

    return (
        <TouchableOpacity
            onPress={() => console.log('Me has presionado')}
        >
            <View style={styles.container}>
                <View style={styles.viewImage}>
                    <Image
                        resizeMode='cover'
                        PlaceholderContent={<ActivityIndicator size='large' color='#ff5a60' />}
                        source={
                            imageHouses ? { uri: imageHouses } : require('../../../assets/logo_b.png')
                        }
                    />
                </View>
                <View>
                    <Text style={{fontWeight:'bold'}}>{place}</Text>
                    <Text style={{paddingTop: 2, color: 'gray'}}>{address}</Text>
                    <Text style={{paddingTop: 2, color: 'gray'}}>{description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})