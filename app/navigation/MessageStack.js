import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Message from "../screens/Message";

const Stack = createStackNavigator();

export default function MessageStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#ff5a60' }
        }}
        >
            <Stack.Screen name="messageStack" component={Message} options={{ title: "Mensajes" }} />
        </Stack.Navigator>
    )
}