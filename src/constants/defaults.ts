import { Dimensions, StyleSheet } from 'react-native';

export const defaults = {
    APP_ICON_WIDTH: 120,
    APP_TEXT_SIZE: 28,
    BG_COLOR: '#191c27',
    BUTTON_COLOR: '#dbd8e3',
    BUTTON_RADIUS: 20,
    BUTTON_TEXT_COLOR: '#000',
    DOT_COLOR: '#3d2e4f',
    SCREEN_WIDTH: Dimensions.get('screen').width,
    TEXT_BOLD: 'Gilroy-ExtraBold',
    TEXT_COLOR: '#fff',
    TEXT_LIGHT: 'Gilroy-Light',
    WHITE: '#fff'
}

export default StyleSheet.create({
    container: {
        backgroundColor: defaults.BG_COLOR,
        flex: 1
    }
})