import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Compare, SplashScreen, Login, SignUp, Account } from '../screens'

import { BottomTabBar } from './BottomTabBar';
import SvgUri from 'react-native-svg-uri';

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

const BottomTabNavigator = createBottomTabNavigator(
    {
        Compare: {
            screen: Compare,
            navigationOptions: {
                tabBarIcon: <SvgUri
                    width='20'
                    height='25'
                    source={require('../assets/images/house.svg')}
                />
            }
        },
        Account: {
            screen: Account,
            navigationOptions: {
                tabBarIcon: <SvgUri
                    width='20'
                    height='25'
                    source={require('../assets/images/earnings.svg')}
                />
            }
        },
    },
    {
        tabBarComponent: BottomTabBar,
        lazy: true
    }
)

const AppSwitch = createAnimatedSwitchNavigator(
    {
        AuthStack,
        BottomTabNavigator
    },
    {

        transition: (
            <Transition.Sequence>
                <Transition.In
                    type="fade"
                    durationMs={300}
                    interpolation="easeIn"
                />
            </Transition.Sequence>
        ),
    }
)



export default createAppContainer(AppSwitch)
