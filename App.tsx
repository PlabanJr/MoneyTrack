import React, { Component } from 'react'
import { StatusBar, Text, View, SafeAreaView } from 'react-native'

import Style from './src/constants/defaults'
import { SplashScreen } from './src/screens'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={Style.container}>
        <StatusBar barStyle="light-content" />
        <SplashScreen />
      </SafeAreaView>
    )
  }
}
