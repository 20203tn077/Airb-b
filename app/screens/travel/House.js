import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import MyCarousel from '../../utils/MyCarousel';
import { Rating, ListItem } from 'react-native-elements'
import Loading from '../../components/Loading'
import Map from '../../utils/Map'
import { map } from 'lodash'

const screenWidth = Dimensions.get('window').width

export default function House(props) {

    const { navigation } = props
    const { house } = props.route.params
    const { images, place, location, address } = house
    useEffect(() => {
        navigation.setOptions({ title: place })
    }, [])
    return (
        <ScrollView>
            <MyCarousel
                arrayImages={images}
                height={250}
                width={screenWidth}
            />
            <TitleHouse>
                house={house}
            </TitleHouse>
            <HouseInfo
                location={location}
                place={place}
                address={address}
            />
        </ScrollView>
    )

    function TitleHouse(props) {
        const { house } = props
        const { rating, description, place } = props
        return (
            <View style={styles.containerTitle}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.place}>{place}</Text>
                    <Rating
                        style={styles.rating}
                        imageSize={20}
                        readonly
                        startingValue={parseFloat(rating)}
                    />
                </View>
            </View>
        )
    }

    function HouseInfo(props) {
        const { location, place, address } = props
        const listInfo = [
            {
                text: address,
                iconName: 'map',
                iconType: 'materialCommunity',
                action: null
            },
            {
                text: 'Holaaaaaaaa',
                iconName: 'phone',
                iconType: 'materialCommunity',
                action: null
            },
            {
                text: 'valerato de estradiol',
                iconName: 'at',
                iconType: 'materialCommunity',
                action: null
            }
        ]
        return (
            <View style={container}>
                <Text style={styles.textInformation}>
                    <Map
                        location={location}
                        place={place}
                        height={200}
                    />
                    {map(listInfo, (item, index) => (
                        <ListItem bottomDivider key={index}>
                            <ListItem.Content>
                                <ListItem.Title>{item.text}</ListItem.Title>
                                <ListItem.Subtitle>{item.address}</ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron onPress={() => console.log('Hola')} />
                        </ListItem>
                    ))}
                </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    containerTitle: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    place: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        marginTop: 5,
        color: 5
    },
    rating: {
        position: 'absolute',
        right: 0
    },
    containerHouseInfo: {
        margin: 15,
        backgroundColor: '#fff',
        marginBottom: 20
    }, 
    textInformation: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }
})