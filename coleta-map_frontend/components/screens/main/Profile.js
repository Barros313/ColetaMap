import {StyleSheet, Text, View} from "react-native";
import * as React from "react";

export default function Profile({ route }) {
    const { user } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.label}> Nome de usuário: </Text>
            <Text style={styles.value}> {user.username} </Text>
            <Text style={styles.label}> Email: </Text>
            <Text style={styles.value}> {user.email} </Text>
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
});