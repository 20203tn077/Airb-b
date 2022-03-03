import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import TravelStack from './TravelStack';
import FavoritesStack from './FavoritesStack';
import SearchStack from './SearchStack';
import ProfileStack from './ProfileStack';
import MessageStack from './MessageStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='travel'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                    tabBarActiveTintColor: '#ff5a60',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                })}
            >
                <Tab.Screen
                    name="search"
                    component={SearchStack}
                    options={{ title: 'Buscar' }}
                />
                <Tab.Screen
                    name="favorites"
                    component={FavoritesStack}
                    options={{ title: 'Favoritos' }}
                />
                <Tab.Screen
                    name="travel"
                    component={TravelStack}
                    options={{ title: 'Viajes' }}
                />
                <Tab.Screen
                    name="message"
                    component={MessageStack}
                    options={{ title: 'Mensajes' }}
                />
                <Tab.Screen
                    name="profile"
                    component={ProfileStack}
                    options={{ title: 'Perfil' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
        case "travel":
            iconName = "airplane-takeoff"
            break;
        case "favorites":
            iconName = "heart-circle"
            break;
        case "profile":
            iconName = "account"
            break;
        case "message":
            iconName = "forum"
            break;
        case "search":
            iconName = "magnify"
            break;
    }
    return (
        <Icon type="material-community" name={iconName} size={22} color={color} />
    )
}