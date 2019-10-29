import { StyleSheet } from 'react-native';
import { defaults } from '../../constants/defaults'

export default StyleSheet.create({
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        paddingBottom: 10,
        width: '100%'
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