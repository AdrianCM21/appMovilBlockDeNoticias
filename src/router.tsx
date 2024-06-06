import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomePage, Post } from "./screens/home/HomePage";
import { VerPosts } from "./screens/posts/VerPosts";

const Stack = createNativeStackNavigator();
export type StackParamList = {

  HomePage: {},
  VerPosts: {
    post: Post
  }

}


export const Router = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePage"
      >
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="VerPosts" component={VerPosts} />

      </Stack.Navigator>

    </NavigationContainer>)

};

