import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

export const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text>  HomePage</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

