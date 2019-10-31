import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NativeRouter, Route } from 'react-router-native'
import Header from './components/header'

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Header />
      </View>
      <View>
        <Route exact path="/" component={Home} />
      </View>
    </NativeRouter>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
