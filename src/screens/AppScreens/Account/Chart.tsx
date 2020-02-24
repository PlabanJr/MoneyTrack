import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { defaults } from '../../../constants/defaults'
import SvgUri from 'react-native-svg-uri'


const Chart = () => {
  return (
    <View style={Style.chartWrapper}>
      <SvgUri source={require('../../../assets/images/girl.svg')} height={150} width={150} />

      <View style={Style.profileDetails}>
        <Text style={Style.label}>Name</Text>
        <Text style={Style.labelValue}>John Doe</Text>
        <Text style={Style.label}>Email</Text>
        <Text style={Style.labelValue}>JohnDoe@gmail.com</Text>
        <Text style={Style.label}>Base currency</Text>
        <Text style={Style.labelValue}>INR (Indian Rupee)</Text>
      </View>

    </View>
  )
}

const Style = StyleSheet.create({
  chartWrapper: {
    padding: 20,
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileDetails: {
    backgroundColor: defaults.HALF_BAKED,
    width: defaults.SCREEN_WIDTH - 60,
    padding: 20,
    margin: 30,
    borderRadius: 30,
  },
  label: {
    fontSize: 20,
    fontFamily: defaults.TEXT_BOLD,
    marginTop: 10
  },
  labelValue: {
    fontSize: 20,
    fontFamily: defaults.TEXT_LIGHT,
    marginTop: 5
  }

})

export default Chart
