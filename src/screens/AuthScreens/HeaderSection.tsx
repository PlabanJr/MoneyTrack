import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SvgUri from 'react-native-svg-uri';

import { defaultStyles, defaults } from '../../constants/defaults'

interface Props {
    route: string
}

export default class Login extends Component<Props, {}> {
    render() {
        const image = this.props.route === 'login' ?
            require('../../assets/images/key.svg') :
            require('../../assets/images/sign_up_1.svg')

        return (
            <View style={[defaultStyles.header, { flex: 3 }]}>
                <SvgUri
                    width={defaults.APP_ICON_WIDTH + 100}
                    height={defaults.APP_ICON_WIDTH + 100}
                    source={image}
                />
                <Text style={defaultStyles.appName}>CURRENCY TRACK</Text>
            </View>
        )
    }
}