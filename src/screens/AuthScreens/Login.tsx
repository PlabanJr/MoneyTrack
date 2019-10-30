import React, { Component } from 'react'
import { Animated, KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack';

import { defaultStyles, defaults, invalidMsgs } from '../../constants/defaults'
import { Button, Input, Modal } from '../../reusables';
import { validateEmail } from '../../utils'

import HeaderSection from './HeaderSection'
import Style from './style'

interface Props {
    navigation: NavigationStackProp<{}>
}

export default class Login extends Component<Props, {}> {
    state = {
        animatedWidth: new Animated.Value(defaults.SCREEN_WIDTH - 50),
        animatedValue: new Animated.Value(1),
        email: '',
        hideText: false,
        incorrectEmailFormat: false,
        loading: false,
        modalVisible: false,
        password: '',
    }

    getModalMsg = () => {
        const { email, incorrectEmailFormat, password } = this.state;

        if (incorrectEmailFormat) {
            return invalidMsgs.EMAIL_INVALID;
        }
        else if (!email) {
            return invalidMsgs.EMAIL_EMPTY;
        }
        else if (!password) {
            return invalidMsgs.PASSWORD;
        }

        return invalidMsgs.DEFAULT;
    }

    validateEmailText = (email: string) => {
        const incorrectEmailFormat = !validateEmail(email)
        this.setState({ incorrectEmailFormat, email })
    }

    handleLogin = () => {
        const { animatedWidth, email, incorrectEmailFormat, password } = this.state;

        // if (incorrectEmailFormat || !password || !email) {
        //     this.setState({ modalVisible: true })
        // }

        this.setState({ loading: true })

        Animated.spring(
            animatedWidth,
            {
                toValue: 40,
                bounciness: 4
            }
        ).start()

        setTimeout(() => this.scaleButton(), 3000)
    }

    scaleButton = () => {
        const { animatedValue, email, incorrectEmailFormat, password } = this.state;
        this.setState({ loading: false, hideText: true })

        Animated.timing(
            animatedValue,
            {
                toValue: 55,
                duration: 200
            }
        ).start(
            () => this.props.navigation.navigate('feed')
        )
    }

    render() {
        const { hideText, animatedValue, animatedWidth, incorrectEmailFormat, loading, modalVisible } = this.state
        const footerStyle = StyleSheet.flatten([defaultStyles.footer, { flex: 1.5 }])
        const invalidStyle = incorrectEmailFormat ? { color: defaults.DANGER } : null
        const inputFieldStyle = StyleSheet.flatten([Style.inputFields, invalidStyle])

        return (
            <KeyboardAvoidingView style={defaultStyles.container} behavior="padding" >
                <HeaderSection route='login' />
                <Modal
                    closeModal={() => this.setState({ modalVisible: false })}
                    text={this.getModalMsg()}
                    visible={modalVisible}
                />
                <View style={footerStyle}>
                    <Input
                        icon={require('../../assets/images/letter.svg')}
                        placeholderTextColor={defaults.BUTTON_TEXT_COLOR}
                        placeholder="email"
                        style={inputFieldStyle}
                        onChangeText={(email) => this.validateEmailText(email)}
                    />
                    <Input
                        icon={require('../../assets/images/lock.svg')}
                        placeholderTextColor={defaults.BUTTON_TEXT_COLOR}
                        placeholder="password"
                        secureTextEntry
                        style={Style.inputFields}
                        onChangeText={(password) => this.setState({ password })}
                    />
                    <Button
                        hideText={false}
                        animatedValue={animatedValue}
                        color={defaults.BUTTON_COLOR_ONE}
                        loading={loading}
                        text={hideText ? '' : 'login'}
                        width={animatedWidth}
                        style={defaultStyles.button}
                        textColor={defaults.BUTTON_TEXT_COLOR}
                        textSize={20}
                        textStyle={defaultStyles.buttonText}
                        onPress={this.handleLogin}
                    />
                </View>
            </KeyboardAvoidingView>
        )
    }
}
