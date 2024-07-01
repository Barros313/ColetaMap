import {StyleSheet, Text, View} from "react-native";
import * as React from "react";

export default function Profile({ navigation }) {
    return (
        <View style={styles.profile}>
            <Text> Perfil </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})