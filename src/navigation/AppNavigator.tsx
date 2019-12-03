import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Home, SplashScreen, Login, SignUp } from '../screens'

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
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: <SvgUri
                    width='20'
                    height='25'
                    source={require('../assets/images/house.svg')}
                />
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                tabBarIcon: <SvgUri
                    width='20'
                    height='25'
                    source={require('../assets/images/coins.svg')}
                />
            }
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: {
                tabBarIcon: <SvgUri
                    width='20'
                    height='25'
                    source={require('../assets/images/coins.svg')}
                />
            }
        }
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
