import React, { Component } from 'react'
import { ImageURISource, StyleSheet, TextInput, View } from 'react-native'
import SvgUri from 'react-native-svg-uri';

import { defaults } from '../constants/defaults';

interface Props {
    autoCapitalize?: any
    icon?: ImageURISource
    placeholder?: string
    placeholderTextColor?: string
    secureTextEntry?: boolean
    style?: Object
    onChangeText?: (text: string) => void
}

export default class index extends Component<Props, {}> {
    render() {
        const { autoCapitalize, icon, placeholder, placeholderTextColor, secureTextEntry, style, onChangeText } = this.props

        return (
            <View style={Style.input}>
                {icon ? <SvgUri
                    width='20'
                    height='20'
                    source={icon}
                /> :
                    null
                }
                <TextInput
                    autoCapitalize={autoCapitalize || 'none'}
                    placeholderTextColor={placeholderTextColor}
                    placeholder={placeholder}
                    style={style}
                    secureTextEntry={secureTextEntry}
                    onChangeText={onChangeText}
                />
            </View>

        )
    }
}

const Style = StyleSheet.create({
    input: {
        alignItems: 'center',
        backgroundColor: defaults.BUTTON_COLOR,
        borderRadius: 20,
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 15,
        paddingVertical: 5
    }
})
