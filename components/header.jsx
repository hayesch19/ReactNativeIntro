import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'

import HeroLogo from '../images/FortyNineRideLogo.png'

export default class Header extends Component {
  render() {
    return (
      <View>
        <Link to="/">
          <Image style={styles.contain} source={HeroLogo} />
        </Link>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    width: 200,
    height: 100,
    resizeMode: 'contain'
  }
})
