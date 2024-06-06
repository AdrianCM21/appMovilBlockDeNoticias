import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Linking,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { constants } from '../../styles/constants';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from '../../components/Link';

import {
  EnchancedScrollView,
  EnchancedScrollViewRef,
} from '../../components/EnchancedScrollView';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../../Router';

import { useSession } from '../../hooks/session'


type Props = NativeStackScreenProps<StackParamList, 'Login'>;
export const Login = ({ navigation }: Props) => {

  const session = useSession();
  const [shownScollIndicator, setShownScollIndicator] = useState(true);
  const [loading, setLoading] = useState(false);
  const scrollView = useRef<EnchancedScrollViewRef>(null);


  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef<TextInput>(null);



  // const handleRedirect = (err: any) => {
  //   setLoading(false);

  //   if (!err.response) return;


  // };

  const handleSubmit = () => {
    setLoading(true);
    session
      .login(usuario, password)
      .then((r) => {
        setLoading(false);
        navigation.navigate('HomePage', {});
      })
      .catch((err: any) => {
        setLoading(false)
        console.error(err)
      }
      );
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ImageBackground

        resizeMode="cover"
        style={styles.background}
      />
      <StatusBar style="auto" />


      <EnchancedScrollView
        style={styles.loginSection}
        ref={scrollView}
        onEndReached={() => setShownScollIndicator(false)}
        onEndExited={() => setShownScollIndicator(true)}
      >
        <View style={styles.scrollContent}>
          <View style={styles.form}>
            <Input
              label="Nombre de usuario"

              autoCorrect={false}
              next={passwordRef}
              onChangeText={setUsuario}
            // error={
            //   errorDetails?.cedula?.length > 0 ? errorDetails.cedula[0] : null
            // }
            />
            <Input
              label="Contraseña"
              type="password"
              containerStyle={{ marginTop: 24 }}
              ref={passwordRef}
              onChangeText={setPassword}
            // error={
            //   errorDetails?.password?.length > 0
            //     ? errorDetails.password[0]
            //     : null
            // }
            />
            <Button
              style={{ marginTop: 48 }}
              onPress={handleSubmit}
              loading={loading}
            >
              Ingresar
            </Button>


          </View>
        </View>
      </EnchancedScrollView>

      {shownScollIndicator && (
        <View style={styles.scrollIndicator}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              scrollView.current?.scrollToEnd();
              setShownScollIndicator(false);
            }}
          >

          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.colors.white,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  loginSection: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollContent: {
    flex: 1,
    alignItems: 'center',
  },
  form: {
    marginTop: 200,
    width: Dimensions.get('window').width - 80,
  },
  links: {
    marginTop: 64,
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linksSecondGroup: {
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  scrollIndicator: {
    flex: 1,
    position: 'absolute',
    bottom: 10,
    right: 0,
    width: 30,
    height: 30,
  },
});
