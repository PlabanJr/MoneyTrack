import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import { TextInput } from 'react-native-gesture-handler'

import { defaults } from '../../../constants/defaults'
import CurrencyModal from './CurrencyModal'

const ConvertView = () => {
  const [baseCurr, setBaseCurr] = useState('INR')
  const [targetCurr, setTargetCurr] = useState('USD')
  const [baseVal, setBaseVal] = useState(baseCurr)
  const [targetVal, setTargetVal] = useState(targetCurr)
  const [isModalVisible, setModalVisibility] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')
  const [initState, setInitState] = useState(true)
  const [spinValue] = useState(new Animated.Value(initState ? 0 : 1))


  const changeBaseCurr = () => {
    setModalVisibility(true)
    setSelectedValue(baseCurr)
  }

  const changeTargetCurr = () => {
    setModalVisibility(true)
    setSelectedValue(targetCurr)
  }

  const closeModal = () => {
    setModalVisibility(false)
  }

  const selectCurrency = (currency: string) => {
    setModalVisibility(false)
    if (selectedValue == baseCurr) {
      setBaseCurr(currency)
    } else {
      setTargetCurr(currency)
    }

  }

  const toggleCurrency = () => {
    const [base, target] = [baseCurr, targetCurr]

    setBaseCurr(target)
    setTargetCurr(base)
  }

  const rotateExchangeButton = () => {
    initState ?
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 300,
          useNativeDriver: true
        }
      )
        .start(() => {
          setInitState(false)
          toggleCurrency()
        })
      : Animated.timing(
        spinValue,
        {
          toValue: 0,
          duration: 300,
          useNativeDriver: true
        }
      )
        .start(() => {
          setInitState(true)
          toggleCurrency()
        })
  }

  const renderDefaultCurr = () => (
    <View style={Style.defaultCurrWrapper}>
      <Text style={Style.defaultCurrText}>base currency</Text>
      <View style={Style.defaultCurr}>
        <Text style={Style.defaultCurrText}>{baseCurr}</Text>
      </View>
    </View>
  )

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  })

  return (
    <View style={Style.convertView}>
      {renderDefaultCurr()}
      <View style={Style.inputWrapper}>
        <TouchableOpacity onPress={changeBaseCurr} style={Style.currencyButton}>
          <Text style={Style.currencyText}>{baseCurr}</Text>
        </TouchableOpacity>
        <TextInput
          maxLength={20}
          keyboardType='decimal-pad'
          allowFontScaling={true}
          onChangeText={setBaseVal}
          style={Style.currencyInputs}
          placeholder="Enter base value..."
        />
      </View>

      <TouchableOpacity onPress={rotateExchangeButton} style={{ transform: [{ rotate: spin }] }}>
        <SvgUri source={require('../../../assets/images/shuffle.svg')} height={35} width={35} />
      </TouchableOpacity>

      <View style={Style.inputWrapper}>
        <TouchableOpacity onPress={changeTargetCurr} style={Style.currencyButton}>
          <Text style={Style.currencyText}>{targetCurr}</Text>
        </TouchableOpacity>
        <TextInput
          maxLength={20}
          keyboardType="decimal-pad"
          allowFontScaling={true}
          onChangeText={setTargetVal}
          style={Style.currencyInputs}
          placeholder="Enter target value..."
        />
      </View>
      <CurrencyModal
        currentCurrency={selectedValue}
        isVisible={isModalVisible}
        closeModal={closeModal}
        selectCurrency={selectCurrency}
      />
    </View>
  )
}

const Style = StyleSheet.create({
  convertView: {
    height: defaults.SCREEN_HEIGHT / 2 - 240,
    flexDirection: 'column',
    justifyContent: "space-evenly",
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 10,
  },
  currencyInputs: {
    width: defaults.SCREEN_WIDTH - 200,
    padding: 10,
    backgroundColor: defaults.WHITE,
    fontSize: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  defaultCurr: {
    borderRadius: 4,
    marginLeft: 10,
    backgroundColor: defaults.BOTTOM_TAB,
    width: 60,
    alignItems: 'center'
  },
  defaultCurrWrapper: {
    flexDirection: 'row',
    marginBottom: 5
  },
  defaultCurrText: {
    color: defaults.TEXT_COLOR,
    fontFamily: defaults.TEXT_LIGHT,
    fontSize: 18
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: defaults.HALF_BAKED,
    borderRadius: 10
  },
  currencyText: {
    fontSize: 24,
    fontFamily: defaults.TEXT_LIGHT,
  },
  currencyButton: {
    width: 70,
    paddingHorizontal: 8
  }
})

export default ConvertView
