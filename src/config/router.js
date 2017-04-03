import React from 'react'
import { View, Text } from 'react-native'
import { DrawerNavigator, StackNavigator } from 'react-navigation'
import { Icon, Button, SocialIcon } from 'react-native-elements'

import { Me, UserDetail, Feed } from '../screens'

export const FeedStack = StackNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: {
        header: ({ navigate }) => ({
          left: (
            <Icon name='menu' onPress={() => navigate('DrawerOpen')} />
          )
        }),
        title: 'Feed'
      }
    },
    Details: {
      screen: UserDetail,
      navigationOptions: {
        title: ({ state }) =>
          `${state.params.name.first.toUpperCase()} ${state.params.name.last.toUpperCase()}`
      }
    }
  },
  {
    headerMode: 'screen'
  }
)

export const Tabs = DrawerNavigator(
  {
    Hello: {
      screen: FeedStack,
      navigationOptions: {
        drawer: () => ({
          label: '',
          icon: () => <Icon name='list' size={25} />
        })
      }
    },
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
  },
  {
    drawerWidth: 200,
    drawerPosition: 'left',
    contentComponent: ({ navigate }) => (
      <View>
        <View style={{ height: 120, backgroundColor: 'lightgreen' }}>
          <Text>Header</Text>
        </View>
        <SocialIcon
          button
          type='medium'
          onLongPress={() => console.warn(navigate)}
        />
      </View>
    )
  }
)

export const Root = StackNavigator(
  {
    Tabs: {
      screen: Tabs
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)
