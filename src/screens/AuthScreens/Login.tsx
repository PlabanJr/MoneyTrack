import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack';

import { defaultStyles, defaults } from '../../constants/defaults'
import { Button, Input } from '../../reusables';

import HeaderSection from './HeaderSection'
import Style from './style'

interface Props {
    navigation: NavigationStackProp<{}>
}

export default class Login extends Component<Props, {}> {
    render() {
        const footerStyle = StyleSheet.flatten([defaultStyles.footer, { flex: 1.5 }])

        return (
            <View style={defaultStyles.container}>
                <HeaderSection route='login' />
                <View style={footerStyle}>
                    <Input
                        icon={require('../../assets/images/letter.svg')}
                        placeholderTextColor={defaults.BUTTON_TEXT_COLOR}
                        placeholder="email" style={Style.inputFields}
                    />
                    <Input
                        icon={require('../../assets/images/lock.svg')}
                        placeholderTextColor={defaults.BUTTON_TEXT_COLOR}
                        placeholder="password"
                        secureTextEntry
                        style={Style.inputFields}
                    />
                    <Button
                        color={defaults.BUTTON_COLOR_ONE}
                        text='login'
                        width={defaults.SCREEN_WIDTH - 50}
                        style={defaultStyles.button}
                        textColor={defaults.BUTTON_TEXT_COLOR}
                        textSize={20}
                        textStyle={defaultStyles.buttonText}
                    // onPress={this.handleLogin}
                    />
                </View>
            </View>
        )
    }
}
