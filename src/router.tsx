import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomePage, Post } from './screens/home/HomePage';
import { VerPosts } from './screens/posts/VerPosts';
import { Login } from './screens/Auth/Login';
import { useSession } from './hooks/session';
import { constants } from './styles/constants';
import { Button } from './components/Button';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();


export type StackParamList = {
  HomePage: {};
  VerPosts: { post: Post };
  Login: {};
}

export const Router = () => {
  const { user, logout, refreshSession } = useSession();

  useEffect(() => {
    refreshSession();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{
          headerStyle: {
            backgroundColor: constants.colors.primary,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      >
        {!user && (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Login' }}
          />
        )}

        {user && (
          <>
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={({ navigation }) => ({
                title: 'Adri Blogs',
                headerRight: () => (
                  user ? (
                    <Button
                      onPress={logout}

                      color={constants.colors.primary}
                    ><Text style={{ color: constants.colors.white }}>Cerrar sesion</Text></Button>
                  ) : null
                ),
              })}
            />
            <Stack.Screen
              name="VerPosts"
              component={VerPosts}
              options={{ title: 'Publicacion' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
