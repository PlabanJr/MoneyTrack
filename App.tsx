import React, { Component } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import { defaultStyles } from './src/constants/defaults'
import AppNavigator from './src/navigation/AppNavigator';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={defaultStyles.container}>
        <StatusBar barStyle="light-content" />
        <AppNavigator />
      </SafeAreaView>
    )
  }
}
