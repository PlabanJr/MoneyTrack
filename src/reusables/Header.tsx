import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageURISource } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationStackProp } from 'react-navigation-stack';

import { defaults } from '../constants/defaults';
import SvgUri from 'react-native-svg-uri';

interface Props {
  headerColor?: string
  leftText?: string
  leftIcon?: ImageURISource
  leftOnPress?: () => void
  rightText?: string
  rightIcon?: ImageURISource
  rightOnPress?: () => void
  title?: string
  titleStyle?: Object
}

export default class Header extends Component<Props, {}> {
  renderLeftContent = () => {
    const { leftText, leftIcon, } = this.props

    if (!leftIcon && !leftText) return null;

    if (leftIcon) {
      return (
        <SvgUri
          width={defaults.HEADER_ICON_SIZE}
          height={defaults.HEADER_ICON_SIZE}
          source={leftIcon}
        />
      )
    }

    return < Text style={Style.leftContent} > {leftText || "Back"}</Text>
  }

  renderRightContent = () => {
    const { rightText, rightIcon } = this.props

    if (!rightIcon && !rightText) return null;

    if (rightIcon) {
      return (
        <SvgUri
          width={defaults.HEADER_ICON_SIZE}
          height={defaults.HEADER_ICON_SIZE}
          source={rightIcon}
        />
      )
    }

    return < Text style={Style.leftContent} > {rightText || "Right"}</Text>
  }

  render() {
    const { headerColor, leftOnPress, rightOnPress, title, titleStyle } = this.props
    const headerStyle = StyleSheet.flatten([
      Style.container,
      { backgroundColor: headerColor || defaults.BG_COLOR }
    ])
    const headerTextStyle = StyleSheet.flatten([Style.title, titleStyle])

    return (
      <View style={headerStyle}>
        <TouchableOpacity onPress={leftOnPress}>
          {this.renderLeftContent()}
        </TouchableOpacity>
        <Text style={headerTextStyle}>{title}</Text>
        <TouchableOpacity onPress={rightOnPress}>
          {this.renderRightContent()}
        </TouchableOpacity>
      </View>
    );
  }
}

const Style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  leftContent: {
    color: defaults.TEXT_COLOR,
    width: 60,
    fontSize: 20,
  },
  rightContent: {
    color: defaults.TEXT_COLOR,
    width: 60
  },
  title: {
    color: defaults.TEXT_COLOR,
    fontSize: 25,
    fontFamily: defaults.TEXT_BOLD
  },
});
