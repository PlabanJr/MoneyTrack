import React, { Component } from 'react'
import Swiper from 'react-native-swiper'
import { NavigationStackProp } from 'react-navigation-stack';

import { defaults } from '../../constants/defaults'

import SlideOne from './slide_one';
import SlideThree from './slide_three';
import SlideTwo from './slide_two';

interface Props {
    navigation: NavigationStackProp<{}>
}

export default class index extends Component<Props, {}> {
    render() {
        const dotStyle = { backgroundColor: defaults.DOT_COLOR }

        return (
            <Swiper autoplay={true} autoplayTimeout={1} loop={false} activeDotColor={defaults.WHITE} dotStyle={dotStyle}>
                <SlideOne />
                <SlideTwo />
                <SlideThree navigation={this.props.navigation} />
            </Swiper >
        )
    }
}
