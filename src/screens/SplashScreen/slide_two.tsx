import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SvgUri from 'react-native-svg-uri';

import { defaults } from '../../constants/defaults';

import Style from './style'


export default class SlideTwo extends Component {
    render() {
        return (
            <View style={Style.slidesContainer}>
                <SvgUri
                    width={defaults.APP_ICON_WIDTH}
                    height={defaults.APP_ICON_WIDTH}
                    source={require('../../assets/images/exchange.svg')}
                />
                <Text style={Style.appName}>CURRENCY TRACK</Text>
                <Text style={Style.subHead}>calculate live currency and foreign</Text>
                <Text style={Style.subHead}>exchange rates</Text>
            </View >
        )
    }
}
