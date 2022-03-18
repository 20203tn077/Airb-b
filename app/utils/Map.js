
import React from 'react'
import MapView from 'react-native-maps'
import OpenMap from 'react-native-open-maps'

export default function Map(props) {
    const { location, place, heigh } = props
    const OpenAppMap = () => {
        OpenMap({
            latitude: location.latitude,
            longitude: location.longitude,
            zoom: 19,
            query: place
        })

        return (
            <MapView
                style={{ height: heigh, width: '100%' }}
                initialRegion={location}
                onPress={OpenAppMap}
            >
                <MapView.Marker
                    coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude
                    }}
                />
            </MapView>
        )
    }
}