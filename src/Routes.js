import React from 'react'
import { Text, ScrollView, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { StackNavigator, DrawerNavigator, DrawerView } from 'react-navigation'

import { SettingsPage, HomePage } from './Components'
const MainNav = StackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: ({navigation}) => ({
      title: `Profile`,
      headerTitle: (
        <Text
          onPress={() => navigation.navigate('DrawerOpen')}
          style={{
            color: '#517fa4',
            marginLeft: 20,
            fontSize: 18,
            marginRight: 28,
            fontWeight: 'bold',
            alignSelf: 'center'
          }}
        >My App
        </Text>
      ),
      headerLeft: (
        <Icon
          name='menu'
          onPress={() => navigation.navigate('DrawerOpen')}
          containerStyle={{padding: 15}}
          color={'#517fa4'}
        />
      ),
      headerRight: (
        <Icon
          name='settings'
          onPress={() => navigation.navigate('Settings')}
          containerStyle={{padding: 15}}
          color={'#517fa4'}
        />
      ),
      headerTitleStyle: {
        alignSelf: 'center'
      },
      headerStyle: {
        backgroundColor: 'transparent'
      }
    })
  },
  Settings: {
    screen: SettingsPage,
    navigationOptions: {
      title: 'Settings',
      headerStyle: {
        backgroundColor: 'transparent'
      },
      headerTitleStyle: {
        alignSelf: 'center',
        marginRight: 56
      }
    }
  }
})

export const Root = DrawerNavigator(
  {
    Test: {
      screen: MainNav,
      navigationOptions: {
        drawer: () => ({
          label: 'Test'
        })
      }
    }
  },
  {
    drawerWidth: 220,
    drawerPosition: 'left',
    contentComponent: props => (
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', height: 120, backgroundColor: '#8F9'}}>
          <Text style={{fontSize: 20}}>Side Menu Header</Text>
        </View>
        <DrawerView.Items
          {...props}
          style={{
            flexShrink: 0
          }}
        />
      </ScrollView>
    )
  }
)
