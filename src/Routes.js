import { StackNavigator, TabNavigator } from 'react-navigation'

import { SignIn, Home } from './Screens'

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator({
    SignedIn: {
      screen: SignedIn,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    SignedOut: {
      screen: SignedOut,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  }, {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
  })
}

export const SignedOut = StackNavigator({
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        title: 'Sign In'
      }
    }    
  })

export const SignedIn = TabNavigator({
    Home1: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home1',
      }
    },
    Home2: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home2',
      }
    }        
  })
