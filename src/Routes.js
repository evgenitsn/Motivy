import React from 'react'
import { Text, ScrollView, View } from 'react-native'
import { StackNavigator, TabNavigator , TabBarBottom} from 'react-navigation'

import { Home } from './Components'

export const Root = TabNavigator(
  {
    Test1: {
      screen: Home
    },
    Test2: {
      screen: Home
    },
    Test3: {
      screen: Home
    }
  },{
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center'
      },
      style: {
        backgroundColor: 'blue',
      },
    }
  }
)
