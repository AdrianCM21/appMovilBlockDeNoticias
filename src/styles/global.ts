import { Platform, StatusBar, StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
