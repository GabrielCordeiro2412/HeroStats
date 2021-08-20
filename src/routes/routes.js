import React from 'react';
import 'react-native-gesture-handler'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from '../views/Home'
import Details from '../views/Details'

const Stack = createNativeStackNavigator();

export default function AppRoutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="Details" component={Details} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}