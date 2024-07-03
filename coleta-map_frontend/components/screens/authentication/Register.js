// components/Register.js
import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, View, Button, Alert, TouchableOpacity, Image} from 'react-native';

export default function Register({ onRegisterSuccess, onBackToLogin }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await fetch(`${process.env.EXPO_PUBLIC_BACKEND_ADDRESS}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }),
            });
            const data = await response.json();
            if (data.success) {
                Alert.alert('Registration Successful', 'You can now log in.');
                onRegisterSuccess();
            } else {
                Alert.alert('Registration Failed', data.message);
            }
        } catch (error) {
            Alert.alert('Error', 'Something went wrong. Please try again.');
        }
    };

    return (
        <View style={styles.container}>

            <Image source={require('../../../assets/app-logo.jpeg')} style={styles.image} />

            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome de usuário"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>

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

            <TouchableOpacity onPress={handleRegister} style={styles.button} >
                <Text style={styles.buttonText}> Cadastrar </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onBackToLogin} style={styles.button} >
                <Text style={styles.buttonText}> Entrar com conta existente </Text>
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
