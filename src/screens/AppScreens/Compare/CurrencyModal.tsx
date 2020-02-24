import React, { useEffect, useState } from 'react'
import { View, Text, Modal, Picker, StyleSheet } from 'react-native'
import { defaults } from '../../../constants/defaults'
import { Header } from '../../../reusables'
import { rates } from './dummy'

interface Props {
  isVisible: boolean
  closeModal: () => void
  currentCurrency: string
  selectCurrency: (currency: string) => void
}

const CurrencyModal = ({ isVisible, closeModal, currentCurrency, selectCurrency }: Props) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(currentCurrency)
  }, [currentCurrency])

  useEffect(() => {
    setValue(value)
  }, [value])

  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      transparent
    >
      <View style={Style.wrapper}>
        <Header
          leftIcon={require('../../../assets/images/close.svg')}
          leftOnPress={closeModal}
          title="base currency"
          rightIcon={require('../../../assets/images/checked.svg')}
          rightOnPress={() => selectCurrency(value)}
          titleStyle={Style.titleStyle}
          headerColor={defaults.WHITE}
        />
        <Picker
          selectedValue={value}
          onValueChange={(value) => setValue(value)}
        >
          {
            rates.map(
              (curr) => <Picker.Item label={curr.currency} value={curr.currency} />
            )
          }
        </Picker>
      </View>
    </Modal>

  )
}

export default CurrencyModal

const Style = StyleSheet.create({
  wrapper: {
    height: defaults.SCREEN_HEIGHT / 2 - 100,
    marginTop: defaults.SCREEN_HEIGHT / 2 + 100,
    backgroundColor: defaults.HALF_BAKED
  },
  titleStyle: {
    fontSize: 20,
    color: defaults.BG_COLOR,
  }
})
