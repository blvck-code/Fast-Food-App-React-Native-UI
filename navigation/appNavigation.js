import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { LogBox } from 'react-native';
import FoodDetailsScreen from '../screens/FoodDetailsScreen';

const Stack = createNativeStackNavigator();


LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="FoodDetails" options={{headerShown: false}} component={FoodDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
