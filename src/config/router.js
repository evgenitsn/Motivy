import React from 'react'
import { DrawerNavigator, StackNavigator } from 'react-navigation'
import { Icon, Button } from 'react-native-elements'

import { Me, UserDetail, Settings, Feed } from '../screens'

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      header: ({ navigate }) => ({
        left: (<Button raised icon={{name: 'menu'}} buttonStyle={{backgroundColor: 'white'}} onPress={() => navigate('DrawerOpen')} />)
      }),
      title: 'Feed'
    }
  },
  Details: {
    screen: UserDetail,
    navigationOptions: {
      title: ({ state }) => `${state.params.name.first.toUpperCase()} ${state.params.name.last.toUpperCase()}`
    }
  }
},
  {
    headerMode: 'screen'
  })

export const Tabs = DrawerNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      drawer: () => ({
        label: 'Feed',
        icon: () => <Icon name='list' size={25} />
      })
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      drawer: () => ({
        label: 'Me',
        icon: () => <Icon name='account-circle' size={25} />
      })
    }
  }
})

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings'
    }
  }
})

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs
  },
  Settings: {
    screen: SettingsStack
  }
}, {
  mode: 'modal',
  headerMode: 'none'
})
