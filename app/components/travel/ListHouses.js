import { StyleSheet, Text, View, ScrollView, FlatList, ActivityIndicator, Touchable } from 'react-native'
import React from 'react'
import { size } from 'lodash'
import { Icon, Image } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function ListHouses(props) {
    
    const { houses} = props
    const navigation = useNavigation()
    return (
        <ScrollView>
            {size(houses) > 0 ? (
                <FlatList
                data={houses}
                renderItem={(house) => <House house={house} navigation={navigation}/>}
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
            onPress={() => navigation.navigate('house', {house})}
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
                    <Text style={{paddingTop: 2, color: 'gray', width: 300}}>{description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    img: {
        width: 80,
        height: 80,
    },
    container: {
        flexDirection: 'row',
        margin: 10,
    },
    viewImage: {
    }
})