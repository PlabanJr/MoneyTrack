import { StyleSheet } from 'react-native';
import { defaults } from '../../constants/defaults'

export default StyleSheet.create({
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
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        paddingBottom: 10,
        width: '100%'
    },
    footer: {
        alignItems: 'center',
        flex: 1
    },
    header: {
        alignItems: 'center',
        flex: 3.5,
        justifyContent: 'center'
    },
    subHead: {
        color: defaults.TEXT_COLOR,
        fontFamily: defaults.TEXT_LIGHT,
        fontSize: 15,
    },
    slidesContainer: {
        alignItems: 'center',
        backgroundColor: defaults.BG_COLOR,
        flex: 1,
        justifyContent: 'center',
    },

})