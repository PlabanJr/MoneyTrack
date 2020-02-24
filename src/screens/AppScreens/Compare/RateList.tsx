import React from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'

import { rates } from './dummy'
import SvgUri from 'react-native-svg-uri'
import { getStatusBarHeight } from 'react-native-safe-area-view'
import { defaults } from '../../../constants/defaults'

interface item {
    currency: string, rate: number
}

const RateList = () => {
    const _renderItem = ({ currency, rate }: item) => (
        <View style={Style.itemWrapper}>
            <SvgUri source={require('../../../assets/flags/india.svg')} height={40} width={50} />
            <View style={Style.currencyDetail}>
                <Text style={Style.currencyName}>{currency}</Text>
                <Text style={Style.currencyLongName}>{currency}</Text>
            </View>
            <Text style={Style.currencyRate}>{rate}</Text>
        </View >
    )




    return (
        <FlatList
            data={rates}
            renderItem={({ item }) => _renderItem(item)}

        />
    )
}

const Style = StyleSheet.create({
    itemWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        paddingBottom: 8,
        borderBottomColor: "#fff",
        borderBottomWidth: 1
    },
    currencyDetail: {
        flex: 1,
        paddingHorizontal: 10,

    },
    currencyName: {
        fontFamily: defaults.TEXT_BOLD,
        fontSize: 20,
        color: defaults.WHITE,

    },
    currencyLongName: {
        color: defaults.WHITE,
    },
    currencyRate: {
        color: defaults.WHITE,
        fontSize: 20,
        fontFamily: defaults.TEXT_BOLD,
    }
})


export default RateList;



/*   ListHeaderComponent={() => (
                <View>
                    <Text>jdfbkjgdb</Text>
                    <Text>jdfbkjgdb</Text>
                </View>
            )} */
