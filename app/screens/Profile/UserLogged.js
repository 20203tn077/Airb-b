import React, {useEffect, useState} from "react";;
import { View, Text, StyleSheet } from "react-native";
import { getAuth } from "firebase/auth";
import { Button } from "react-native-elements/dist/buttons/Button";

export default function UserLogged() {
    const auth = getAuth();
    const [reload, setReload] = useState(false);
    const [infoUser, SetInfoUser] = useState();
    useEffect(() => {
        (async () => {
            const user = await auth.currentUser;
            SetInfoUser(user);
        })
        setReload(false);
    },[reload]);
    return(
        <View style={styles.container}>
            <Button
                buttonStyle={styles.btn}
                title="Cerrar sesión"
                containerStyle={styles.btnContainer}
                onPress={() => auth.signOut()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#ff5a60",
        color: "#FFF"
    },
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        justifyContent:"center",
        alignItems:"center",
    },
    btnContainer: {
        width: "80%",
        
    }
})