import React, { Component } from 'react'
import { ImageURISource, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SvgUri from 'react-native-svg-uri';

interface Props {
    color?: string
    icon?: ImageURISource
    style?: Object
    text: string
    textColor?: string
    textSize?: number
    textStyle?: Object
    width: number
    onPress?: () => void
}

export default class Button extends Component<Props, {}> {
    render() {
        const { color, icon, style, text, textColor, textSize, textStyle, width, onPress } = this.props
        const BUTTON_STYLE = StyleSheet.flatten([{ width: width, backgroundColor: color }, style])
        const BUTTON_TEXT_STYLE = StyleSheet.flatten([{ color: textColor, fontSize: textSize }, textStyle])

        return (
            <TouchableOpacity style={BUTTON_STYLE} onPress={onPress}>
                {icon ?
                    <SvgUri
                        width='20'
                        height='25'
                        source={icon}
                    /> : null}
                <Text style={BUTTON_TEXT_STYLE}>{text}</Text>
            </TouchableOpacity>
        )
    }
}
