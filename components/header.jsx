import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import HeroLogo from '../images/FortyNineRideLogo.png'

export default class Header extends Component {
  render() {
    return (
      <View>
        <Image style={styles.stretch} source={HeroLogo} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  stretch: {
    width: 200,
    height: 100,
    resizeMode: 'stretch'
  }
})
