import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SignIn, Home, Profile, Recent, Favorites } from './Screens'

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
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: () => (<Icon size={24} color='#000' name='home' />)
    }
  },
  Recent: {
    screen: Recent,
    navigationOptions: {
      tabBarIcon: () => (<Icon size={24} color='#000' name='timer' />)
    }
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      tabBarIcon: () => (<Icon size={24} color='#000' name='favorite' />)
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: () => (<Icon size={24} color='#000' name='person' />)
    }
  }
}, {
  swipeEnabled: true,
  animationEnabled: false,
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: '#999',
      rippleColor: 'white',
      style: {
        height: 48
      },
      innerStyle: {
        paddingTop: 16
      },
      tabs: {
        Home: {
          barBackgroundColor: '#999',
          activeIcon: <Icon size={24} color='#fff' name='home' />
        },
        Recent: {
          barBackgroundColor: '#999',
          activeIcon: <Icon size={24} color='#fff' name='timer' />
        },
        Favorites: {
          barBackgroundColor: '#999',
          activeIcon: <Icon size={24} color='#fff' name='favorite' />
        },
        Profile: {
          barBackgroundColor: '#999',
          activeIcon: <Icon size={24} color='#fff' name='person' />
        }
      }
    }
  }
})
