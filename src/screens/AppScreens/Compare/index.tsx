import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { StyleSheet } from 'react-native';
import { defaults } from '../../../constants/defaults';

import RateList from './RateList'
import ConvertView from './ConvertView'
import { Header } from '../../../reusables';

export default class Compare extends Component {
    render() {
        return (
            <View style={Style.container}>
                <Header title={"MONEYTRACK"} headerColor={defaults.BOTTOM_TAB_BAR} />
                <ConvertView />
                <View style={Style.rateListContainer}>
                    <RateList />
                </View>
            </View >
        )
    }
}

const Style = StyleSheet.create({
    container: {
        backgroundColor: defaults.BG_COLOR,
        flex: 1,
    },
    rateListContainer: {
        backgroundColor: defaults.MULLED_WINE,
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,

    }
})
