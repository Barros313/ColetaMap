// components/Login.js
import React, { useState } from 'react';
import {StyleSheet, Image, TextInput, View, Alert, TouchableOpacity, Text} from 'react-native';

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

            <Image source={require('../../../assets/app-logo.jpeg')} style={styles.image} />

            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <TouchableOpacity onPress={handleLogin} style={styles.button} >
                <Text> Entrar </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onRegister} style={styles.button} >
                <Text> Cadastrar-se </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 40,
      marginBottom: 40,
    },
    inputView: {
        backgroundColor: "#ccffc0",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    input: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    button: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#1cff14",
    },
});
