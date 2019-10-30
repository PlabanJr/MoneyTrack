import React, { Component } from 'react'
import { KeyboardAvoidingView, View, StyleSheet } from 'react-native'

import { defaults, defaultStyles, invalidMsgs } from '../../constants/defaults'
import { Button, Input, Modal } from '../../reusables';
import { validateEmail, validatePassword, validateUsername } from '../../utils'

import HeaderSection from './HeaderSection'
import Style from './style'

export default class Login extends Component {
    state = {
        email: '',
        incorrectEmailFormat: false,
        incorrectPasswordFormat: false,
        incorrectUsernameFormat: false,
        modalVisible: false,
        password: '',
        username: '',
    }

    getModalMsg = () => {
        const { email, incorrectEmailFormat, incorrectPasswordFormat, incorrectUsernameFormat, password, username } = this.state;

        if (incorrectUsernameFormat) {
            return invalidMsgs.USERNAME_INVALID;
        }
        else if (incorrectEmailFormat) {
            return invalidMsgs.EMAIL_INVALID;
        }
        else if (incorrectPasswordFormat) {
            return invalidMsgs.PASSWORD_INVALID;
        }
        else if (!username) {
            return invalidMsgs.USERNAME_EMPTY;
        }
        else if (!email) {
            return invalidMsgs.EMAIL_EMPTY;
        }
        else if (!password) {
            return invalidMsgs.PASSWORD;
        }

        return invalidMsgs.DEFAULT;
    }

    handleSignUp = () => {
        const {
            email,
            incorrectEmailFormat,
            incorrectPasswordFormat,
            incorrectUsernameFormat,
            password,
            username
        } = this.state;

        if (
            incorrectUsernameFormat ||
            incorrectEmailFormat ||
            incorrectPasswordFormat ||
            !username ||
            !password ||
            !email
        ) {
            this.setState({ modalVisible: true })
        }
    }

    validateEmailText = (email: string) => {
        const incorrectEmailFormat = !validateEmail(email)
        this.setState({ incorrectEmailFormat, email })
    }

    validatePasswordText = (password: string) => {
        const incorrectPasswordFormat = !validatePassword(password)
        this.setState({ incorrectPasswordFormat, password })
    }

    validateUsernameText = (username: string) => {
        const incorrectUsernameFormat = !validateUsername(username)
        this.setState({ incorrectUsernameFormat, username })
    }


    render() {
        const { modalVisible, incorrectEmailFormat, incorrectPasswordFormat, incorrectUsernameFormat } = this.state
        const footerStyle = StyleSheet.flatten([defaultStyles.footer, { flex: 1.5 }])
        const invalidStyle = { color: defaults.DANGER }
        const inputFieldStyle = StyleSheet.flatten([Style.inputFields, invalidStyle])

        return (
            <KeyboardAvoidingView style={defaultStyles.container} behavior="padding" >
                <HeaderSection route='signUp' />
                <Modal
                    closeModal={() => this.setState({ modalVisible: false })}
                    text={this.getModalMsg()}
                    visible={modalVisible}
                />
                <View style={footerStyle}>
                    <Input
                        icon={require('../../assets/images/user.svg')}
                        placeholderTextColor={defaults.BUTTON_TEXT_COLOR}
                        placeholder="username"
                        style={incorrectUsernameFormat ? inputFieldStyle : Style.inputFields}
                        onChangeText={(username) => this.validateUsernameText(username)}
                    />
                    <Input
                        icon={require('../../assets/images/letter.svg')}
                        placeholderTextColor={defaults.BUTTON_TEXT_COLOR}
                        placeholder="email"
                        style={incorrectEmailFormat ? inputFieldStyle : Style.inputFields}
                        onChangeText={(email) => this.validateEmailText(email)}
                    />
                    <Input
                        icon={require('../../assets/images/lock.svg')}
                        placeholderTextColor={defaults.BUTTON_TEXT_COLOR}
                        placeholder="password"
                        secureTextEntry
                        style={incorrectPasswordFormat ? inputFieldStyle : Style.inputFields}
                        onChangeText={(password) => this.validatePasswordText(password)}
                    />
                    <Button
                        color={defaults.BUTTON_COLOR_ONE}
                        text='sign up'
                        width={defaults.SCREEN_WIDTH - 50}
                        style={defaultStyles.button}
                        textColor={defaults.BUTTON_TEXT_COLOR}
                        textSize={20}
                        textStyle={defaultStyles.buttonText}
                        onPress={this.handleSignUp}
                    />
                </View>
            </KeyboardAvoidingView>
        )
    }
}
