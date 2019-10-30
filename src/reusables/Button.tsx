import React, { Component } from 'react'
import { Animated, ImageURISource, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import SvgUri from 'react-native-svg-uri';

import { defaults } from '../constants/defaults';

interface Props {
    animatedValue?: Animated.Value
    color?: string
    hideText?: boolean
    icon?: ImageURISource
    loading?: boolean
    style?: Object
    text: string
    textColor?: string
    textSize?: number
    textStyle?: Object
    width: Animated.Value
    onPress?: () => void
}

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

export default class Button extends Component<Props, {}> {
    render() {
        const { hideText, animatedValue, color, icon, loading, style, text, textColor, textSize, textStyle, width, onPress } = this.props
        const BUTTON_STYLE = StyleSheet.flatten([
            {
                width: width,
                backgroundColor: color
            },
            animatedValue ? {
                transform: [
                    {
                        scale: animatedValue
                    }
                ]
            } : null,
            style
        ])
        const BUTTON_TEXT_STYLE = StyleSheet.flatten([{ color: textColor, fontSize: textSize }, textStyle])

        return (
            <AnimatedButton style={BUTTON_STYLE} onPress={onPress}>
                {icon ?
                    <SvgUri
                        width='20'
                        height='25'
                        source={icon}
                    /> : null}

                {loading ? <ActivityIndicator color={defaults.WHITE} /> :
                    hideText ? null : <Text style={BUTTON_TEXT_STYLE}>{text}</Text>}
            </AnimatedButton>
        )
    }
}
