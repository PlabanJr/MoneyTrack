import React, { Component } from 'react'
import { Modal, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import SvgUri from 'react-native-svg-uri';

import { defaults } from '../constants/defaults';

interface Props {
    closeModal: () => void
    text: string
    visible: boolean
}

export default class CustomModal extends Component<Props, {}> {
    render() {
        const { closeModal, text, visible } = this.props

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <SafeAreaView style={Style.containerStyle}>
                    <View style={Style.textWrapper}>
                        <SvgUri
                            width='80'
                            height='80'
                            source={require('../assets/images/close.svg')}
                        />
                        <Text style={Style.textStyle}>Oops...!</Text>
                        <Text style={Style.textStyle}>{text}</Text>
                    </View>
                    <TouchableOpacity style={Style.closeButton} onPress={closeModal}>
                        <SvgUri
                            width='10'
                            height='10'
                            source={require('../assets/images/end.svg')}
                        />
                    </TouchableOpacity>
                </SafeAreaView>
            </Modal>
        )
    }
}

const Style = StyleSheet.create({
    closeButton: {
        backgroundColor: defaults.WHITE,
        borderRadius: 20,
        padding: 10
    },
    containerStyle: {
        alignItems: 'center',
        backgroundColor: defaults.TRANSPARENT,
        flex: 1,
        justifyContent: 'center'
    },
    textStyle: {
        color: defaults.BG_COLOR,
        fontFamily: defaults.TEXT_LIGHT,
        fontSize: 18,
        marginTop: 10,
        textAlign: 'center'
    },
    textWrapper: {
        alignItems: 'center',
        backgroundColor: defaults.WHITE,
        borderRadius: 10,
        height: defaults.SCREEN_WIDTH - 200,
        marginBottom: 10,
        padding: 20,
        width: defaults.SCREEN_WIDTH - 100,
    }
})