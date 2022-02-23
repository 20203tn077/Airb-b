import React, {useEffect, useState} from "react";;
import { View, Text, StyleSheet } from "react-native";
import { getAuth } from "firebase/auth";
import { Button } from "react-native-elements/dist/buttons/Button";
import UserInfo from "./UserInfo";

export default function UserLogged() {
    const auth = getAuth();
    const [reload, setReload] = useState(false);
    const [infoUser, SetInfoUser] = useState("asd");
    useEffect(() => {
        (async () => {
            const user = await auth.currentUser;
            SetInfoUser(user);
        })();
        setReload(false);
    },[reload]);
    return(
        <View style={styles.container}>
            {infoUser && <UserInfo infoUser={infoUser}/>}
            <Button
                buttonStyle={styles.btn}
                title="Cerrar sesión"
                titleStyle={styles.btnTitle}
                onPress={() => auth.signOut()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        marginTop: 30,
        borderRadius: 0,
        backgroundColor: "#FFF",
        borderTopWidth: 1,
        borderTopColor: "#ff5a60",
        paddingTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ff5a60",
        paddingBottom: 10,
    },
    container: {
        minHeight: "100%",
        backgroundColor: "#FFF",

    },
    btnContainer: {
        width: "80%",
        
    },
    btnTitle: {
        color: "#ff5a60"
    }
})