import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomePage } from "./screens/home/HomePage";

const Stack = createNativeStackNavigator();



export const Router = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePage"
      >
        <Stack.Screen name="HomePage" component={HomePage} />

      </Stack.Navigator>

    </NavigationContainer>)

};

