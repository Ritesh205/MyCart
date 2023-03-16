import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootParams } from '../types';
import HomeScreen from '../screens/HomeScreen';
import Cart from '../screens/Cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MainStack = createBottomTabNavigator<RootParams>();

export function AppNavigator() {
    return (
        <MainStack.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName = '';
    
                if (route.name === 'Home') {
                  iconName = focused
                    ? 'home'
                    : 'home-outline';
                } else if (route.name === 'Cart') {
                  iconName = focused ? 'cart' : 'cart-outline';
                }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
        })} >
            <MainStack.Screen name="Home" component={HomeNavigator} />
            <MainStack.Screen name="Cart" component={Cart} />
        </MainStack.Navigator>
    )
};

const ProductStack = createNativeStackNavigator();
function HomeNavigator() {
    return (
        <ProductStack.Navigator screenOptions={{headerShown: false}}>
            <ProductStack.Screen name="Products" component={HomeScreen} />
        </ProductStack.Navigator>
    );
}
