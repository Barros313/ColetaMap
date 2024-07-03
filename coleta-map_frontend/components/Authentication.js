import React, { useState } from "react";
import { View } from 'react-native';

import { Login, Register } from './screens/authentication'

export default function Authentication({ onLogin }) {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <View style={{ flex: 1 }}>
            {isLogin ? (
                <Login onLogin={onLogin} onRegister={() => setIsLogin(false)} />
            ) : (
                <Register onRegisterSuccess={() => setIsLogin(true)} onBackToLogin={() => setIsLogin(true)} />
            )}
        </View>
    );
}