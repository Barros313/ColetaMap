import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import { Map, Profile } from './screens/main';

export default function MainComponent({ user, onLogout }) {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Mapa">
                <Drawer.Screen name="Mapa" component={Map} />
                <Drawer.Screen name="Perfil" component={Profile} initialParams={{ user: user, onLogout: onLogout }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}