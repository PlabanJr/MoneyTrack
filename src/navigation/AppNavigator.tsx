import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import { feed, SplashScreen, Login, SignUp } from '../screens'

const AuthStack = createStackNavigator(
    {
        SplashScreen,
        Login,
        SignUp,
    },
    {
        headerMode: "none",
        initialRouteName: 'SplashScreen'
    }
)

const AppStack = createStackNavigator(
    {
        feed
    },
    {
        headerMode: "none",
        initialRouteName: 'feed'
    }
)

const AppSwitch = createAnimatedSwitchNavigator(
    {
        AuthStack,
        AppStack
    },
    {

        transition: (
            <Transition.Sequence>
                <Transition.Out
                    type="fade"
                    durationMs={50}
                    interpolation="linear"
                />
                <Transition.In type="fade" durationMs={50} />
            </Transition.Sequence>
        ),
    }
)



export default createAppContainer(AppSwitch)