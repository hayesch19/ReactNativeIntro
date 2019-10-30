import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/header'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Hello World!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
