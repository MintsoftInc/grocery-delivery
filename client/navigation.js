import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { View, Text } from 'react-native';
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import StoreScreen from './screens/StoreScreen';
import CartScreen from './screens/CartScreen';
import OrderPrepairingScreen from './screens/OrderPrepairingScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import LandingScreen from './screens/LandingScreen';


export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="LandingPage" component={LandingScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Store" component={StoreScreen} />
                <Stack.Screen name="Cart" options={{presentation: 'modal'}} component={CartScreen} />
                <Stack.Screen name="OrderPrepairing" options={{presentation: 'fullScreenModal'}} component={OrderPrepairingScreen} />
                <Stack.Screen name="Delivery" options={{presentation: 'fullScreenModal'}} component={DeliveryScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}