import { Animated } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack';

export const animateButtonWidth = (animatedWidth: Animated.Value) => {
    Animated.spring(
        animatedWidth,
        {
            toValue: 40,
            bounciness: 4
        }
    ).start()
}

export const goBack = (navigation: NavigationStackProp<{}>) => {
    navigation.goBack()
}

export const validateEmail = (email: string) => {
    if (!email || !email.length) return false;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    else return false;
}

export const validatePassword = (password: string) => {
    if (!password || password.length < 5) return false;

    return true;
}

export const validateUsername = (userName: string) => {
    if (!userName || userName.length <= 4) return false;

    return true;
}


export const scaleButtonHelper = (animatedValue: Animated.Value, navigation: NavigationStackProp<{}>) => {
    Animated.timing(
        animatedValue,
        {
            toValue: 55,
            duration: 280
        }
    ).start(
        () => navigation.navigate('feed')
    )
}
