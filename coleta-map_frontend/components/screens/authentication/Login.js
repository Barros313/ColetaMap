// components/Login.js
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function Login({ onLogin, onRegister }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch(`${process.env.EXPO_PUBLIC_BACKEND_ADDRESS}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                Alert.alert('Login Failed', data.message || 'An error occurred');
                return;
            }

            console.log("Logged in: ", data.user);


            onLogin(data.user);
        } catch (error) {
            Alert.alert('Error', `Something went wrong. ${error}`);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
            <Button title="Register" onPress={onRegister} />
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
    input: {
        width: '100%',
        padding: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },
});
