import React from 'react'
import { Easing, Animated } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SignIn, Home, Profile, Recent, Favorites } from './Screens'
import QuoteDetail from './Screens/Modals/QuoteDetail'

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
}, {
  headerMode: 'none'
})

export const SignedIn = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (<Icon size={24} color={tintColor} name='home' />)
    }
  },
  Recent: {
    screen: StackNavigator({
      RecentIn: {
        screen: Recent
      },
      QuoteDetails: {
        screen: QuoteDetail
      }
    }, {
      headerMode: 'none',
      transitionConfig: () => ({
        transitionSpec: {
          duration: 0,
          timing: Animated.timing,
          easing: Easing.step0
        }
      })
    }),
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (<Icon size={24} color={tintColor} name='timer' />)
    }
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (<Icon size={24} color={tintColor} name='favorite' />)
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (<Icon size={24} color={tintColor} name='person' />)
    }
  }
}, {
  swipeEnabled: true,
  animationEnabled: false,
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#e91',
    style: {
    }
  }
})
