// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTDL from './components/MyTDL';  // To-Do List screen
import LoginScreen from './components/LoginScreen';  // Login screen
import RegisterScreen from './components/RegisterScreen';  // Register screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="MyTDL" component={MyTDL} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
