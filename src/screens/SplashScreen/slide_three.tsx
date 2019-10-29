import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SvgUri from 'react-native-svg-uri';

import { defaultStyles, defaults } from '../../constants/defaults';
import { Button } from "../../reusables";

import Style from './style'

export default class SlideThree extends Component {
    handleLogin = () => {
        console.log("Login")
    }

    handleSignUp = () => {
        console.log("SignUp")
    }

    handleFacebookLogin = () => {
        console.log("FB")
    }

    renderButtons = (text: string, width: number) => {
        let icon, handleOnPress;

        switch (text) {
            case 'login':
                icon = require('../../assets/images/login.svg')
                handleOnPress = this.handleLogin
                break;
            case 'sign up':
                icon = require('../../assets/images/sign-up.svg')
                handleOnPress = this.handleSignUp
                break;
            case 'facebook login':
                icon = require('../../assets/images/facebook.svg')
                handleOnPress = this.handleFacebookLogin
                break;
        }

        return (
            <Button
                color={defaults.BUTTON_COLOR}
                icon={icon}
                text={text}
                width={width}
                style={defaultStyles.button}
                textColor={defaults.BUTTON_TEXT_COLOR}
                textSize={20}
                textStyle={defaultStyles.buttonText}
                onPress={handleOnPress}
            />
        )
    }

    render() {
        return (
            <View style={Style.slidesContainer}>
                <View style={defaultStyles.header}>
                    <SvgUri
                        width={defaults.APP_ICON_WIDTH}
                        height={defaults.APP_ICON_WIDTH}
                        source={require('../../assets/images/currency.svg')}
                    />
                    <Text style={defaultStyles.appName}>CURRENCY TRACK</Text>
                </View>
                <View style={defaultStyles.footer}>
                    <View style={Style.buttonWrapper}>
                        {this.renderButtons('login', defaults.SCREEN_WIDTH / 2 - 30)}
                        {this.renderButtons('sign up', defaults.SCREEN_WIDTH / 2 - 30)}
                    </View>
                    {this.renderButtons('facebook login', defaults.SCREEN_WIDTH - 50)}
                </View>
            </View >
        )
    }
}
