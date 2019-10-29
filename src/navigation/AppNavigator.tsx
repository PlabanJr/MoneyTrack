import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { SplashScreen, Login, SignUp } from '../screens'

const AuthStack = createStackNavigator(
    {
        SplashScreen,
        Login,
        SignUp
    },
    {
        headerMode: "none",
        initialRouteName: 'SplashScreen'
    }
)

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthStack,
        },
        {
        }
    )
)