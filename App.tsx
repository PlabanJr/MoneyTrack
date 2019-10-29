import React, { Component } from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'

import Login from "./src/screens/AuthScreens/Login";
import SignUp from "./src/screens/AuthScreens/SignUp";
import { SplashScreen } from './src/screens'
import { defaultStyles } from './src/constants/defaults'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={defaultStyles.container}>
        <StatusBar barStyle="light-content" />
        <SignUp />
      </SafeAreaView>
    )
  }
}
