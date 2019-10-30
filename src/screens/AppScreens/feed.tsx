import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SvgUri from 'react-native-svg-uri';

import { StyleSheet } from 'react-native';
import { defaults, defaultStyles } from '../../constants/defaults';

export default class SlideOne extends Component {
    render() {
        return (
            <View style={Style.slidesContainer}>
                <SvgUri
                    width={defaults.APP_ICON_WIDTH}
                    height={defaults.APP_ICON_WIDTH}
                    source={require('../../assets/images/coins.svg')}
                />
                <Text style={defaultStyles.appName}>CURRENCY TRACK</Text>
                <Text style={Style.subHead}>let's you track currency rates</Text>
            </View >
        )
    }
}





const Style = StyleSheet.create({
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        paddingBottom: 10,
        width: '100%'
    },
    subHead: {
        color: defaults.TEXT_COLOR,
        fontFamily: defaults.TEXT_LIGHT,
        fontSize: 15,
    },
    slidesContainer: {
        alignItems: 'center',
        backgroundColor: defaults.BG_COLOR,
        flex: 1,
        justifyContent: 'center',
    },
})