import { Dimensions, StyleSheet } from 'react-native';

export const defaults = {
    APP_ICON_WIDTH: 120,
    APP_TEXT_SIZE: 28,
    BG_COLOR: '#191c27',
    BUTTON_COLOR: '#dbd8e3',
    BUTTON_COLOR_ONE: '#dd6892',
    BUTTON_RADIUS: 20,
    BUTTON_TEXT_COLOR: '#000',
    DANGER: '#ff0000',
    DOT_COLOR: '#3d2e4f',
    SCREEN_WIDTH: Dimensions.get('screen').width,
    TEXT_BOLD: 'Gilroy-ExtraBold',
    TEXT_COLOR: '#fff',
    TEXT_LIGHT: 'Gilroy-Light',
    TRANSPARENT: 'transparent',
    WHITE: '#fff'
}

export const defaultStyles = StyleSheet.create({
    appName: {
        color: defaults.TEXT_COLOR,
        fontFamily: defaults.TEXT_LIGHT,
        fontSize: defaults.APP_TEXT_SIZE,
        marginTop: 20,
    },
    button: {
        alignItems: 'center',
        borderRadius: defaults.BUTTON_RADIUS,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    buttonText: {
        fontFamily: defaults.TEXT_LIGHT,
        marginLeft: 8
    },
    container: {
        backgroundColor: defaults.BG_COLOR,
        flex: 1
    },
    footer: {
        alignItems: 'center',
        flex: 1
    },
    header: {
        alignItems: 'center',
        flex: 3.5,
        justifyContent: 'center'
    }
})

export const invalidMsgs = {
    DEFAULT: 'There is a problem. Please try again!',
    EMAIL_EMPTY: "You left the email field empty!",
    EMAIL_INVALID: "You entered an invalid email format!",
    PASSWORD: "You left the password field empty!",
    PASSWORD_INVALID: "Password is too short!",
    USERNAME_EMPTY: "You left the username field empty!",
    USERNAME_INVALID: "Username is too short!",
}