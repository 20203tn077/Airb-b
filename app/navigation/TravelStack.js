import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Travel from "../screens/Travel";
import AddHouse from "../screens/travel/AddHouse";
import House from "../screens/travel/House";

const Stack = createStackNavigator();

export default function TravelStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#ff5a60' }
        }}
        >
            <Stack.Screen name="travelStack" component={Travel} options={{ title: "Viajes" }} />
            <Stack.Screen name="addHouse" component={AddHouse} options={{ title: "Agrega un condominio" }} />
            <Stack.Screen name="house" component={House} options={{ title: "Condominio" }} />
        </Stack.Navigator>
    )
}