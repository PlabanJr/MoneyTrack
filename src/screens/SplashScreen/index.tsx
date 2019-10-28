import React, { Component } from 'react'

import SlideOne from './slide_one';
import SlideThree from './slide_three';
import SlideTwo from './slide_two';
import Swiper from 'react-native-swiper'
import { defaults } from '../../constants/defaults'

export default class index extends Component {
    render() {
        const dotStyle = { backgroundColor: defaults.DOT_COLOR }

        return (
            <Swiper autoplay={true} autoplayTimeout={1} loop={false} activeDotColor={defaults.WHITE} dotStyle={dotStyle}>
                <SlideOne />
                <SlideTwo />
                <SlideThree />
            </Swiper >
        )
    }
}
