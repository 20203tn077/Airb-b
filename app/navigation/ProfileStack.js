import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Profile";
import UserGuest from "../screens/Profile/UserGuest";
import UserLogged from "../screens/Profile/UserLogged";
import UserLogin from "../screens/Profile/UserLogin";
import UserSignup from "../screens/Profile/UserSignup";

const Stack = createStackNavigator();

export default function ProfileStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#ff5a60' }
        }}
        >
            <Stack.Screen
                name="profileStack"
                component={Profile}
                options={{ title: "Perfil" }} />
            <Stack.Screen
                name="userGuest"
                component={UserGuest}
                options={{title:"Invitado"}}
            />
            <Stack.Screen
                name="userLogged"
                component={UserLogged}
                options={{title:"Perfil de usuario"}}
            />
            <Stack.Screen
                name="userLogin"
                component={UserLogin}
                options={{title:"Inicio de sesión"}}
            />
            <Stack.Screen
                name="userSignup"
                component={UserSignup}
                options={{title:"Registro de usuario"}}
            />
        </Stack.Navigator>
    )
}