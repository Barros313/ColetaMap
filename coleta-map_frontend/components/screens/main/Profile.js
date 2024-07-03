import {Button, Image, StyleSheet, Text, View} from "react-native";
import * as React from "react";

export default function Profile({ route, navigation }) {
    const { user, onLogout } = route.params;

    return (
        <View style={styles.container}>

            <Image
                source={ require('../../../assets/user-default-profile-picture.png') }
                style={styles.profilePicture}
            />

            <Text style={styles.label}> Nome de usuário: </Text>
            <Text style={styles.value}> {user.username} </Text>
            <Text style={styles.label}> Email: </Text>
            <Text style={styles.value}> {user.email} </Text>

            <Button title="Logout" onPress={onLogout} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 18,
        marginBottom: 8,
    },
    profilePicture: {
        width: 200,
        height: 200,
        borderRadius: 100
    }
});