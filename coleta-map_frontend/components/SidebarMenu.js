import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

import { Map, Profile } from './screens/main';

export default function SidebarMenu() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Map">
                <Drawer.Screen name="Map" component={Map} />
                <Drawer.Screen name="Profile" component={Profile} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

})