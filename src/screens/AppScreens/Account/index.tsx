import React from 'react'
import { View, Text } from 'react-native'

import Header from '../../../reusables/Header'
import { defaults } from '../../../constants/defaults'

import Chart from './Chart'

const Account = () => {
  return (
    <View>
      <Header title={"MONEYTRACK"} headerColor={defaults.BOTTOM_TAB_BAR} />
      <Chart />
    </View>
  )
}

export default Account
