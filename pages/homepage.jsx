import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function App() {
  return (
    <>
      <View>
        <h1>Homepage</h1>
      </View>
      <View>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          molestiae animi in, iure reprehenderit iusto expedita ratione
          asperiores similique hic nostrum ad quaerat nobis? Expedita voluptas
          tempore assumenda illum eaque.
        </p>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
