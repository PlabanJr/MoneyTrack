import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { defaultStyles, defaults } from '../../constants/defaults'
import { Button, Input } from '../../reusables';

import HeaderSection from './HeaderSection'
import Style from './style'

export default class Login extends Component {
    render() {
        const footerStyle = StyleSheet.flatten([defaultStyles.footer, { flex: 1.5 }])

        return (
            <View style={defaultStyles.container}>
                <HeaderSection route='signUp' />
                <View style={footerStyle}>
                    <Input
                        icon={require('../../assets/images/user.svg')}
                        placeholderTextColor={defaults.BUTTON_TEXT_COLOR}
                        placeholder="username"
                        style={Style.inputFields}
                    />
                    <Input
                        icon={require('../../assets/images/letter.svg')}
                        placeholderTextColor={defaults.BUTTON_TEXT_COLOR}
                        placeholder="email"
                        style={Style.inputFields}
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
                    //onPress={handleOnPress}
                    />
                </View>
            </View>
        )
    }
}
