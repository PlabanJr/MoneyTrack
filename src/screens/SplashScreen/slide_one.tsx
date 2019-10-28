import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SvgUri from 'react-native-svg-uri';

import { defaults } from '../../constants/defaults';

import Style from './style'


export default class SlideOne extends Component {
    render() {
        return (
            <View style={Style.slidesContainer}>
                <SvgUri
                    width={defaults.APP_ICON_WIDTH}
                    height={defaults.APP_ICON_WIDTH}
                    source={require('../../assets/images/coins.svg')}
                />
                <Text style={Style.appName}>CURRENCY TRACK</Text>
                <Text style={Style.subHead}>let's you track currency rates</Text>
            </View >
        )
    }
}
