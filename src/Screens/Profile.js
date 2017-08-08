import React, { Component } from 'react'
import { View, Button } from 'react-native'

import { NavigationActions } from 'react-navigation'
import { onSignOut } from '../Auth'

export default class Profile extends Component {
  disableBackButtonIfOnTop (navigation) {
    navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        key: null,
        actions: [
          NavigationActions.navigate({
            routeName: 'SignedOut',
            action: [NavigationActions.navigate({routeName: 'SignIn'})]
          })
        ]
      })
    )
  }

  render () {
    let navigation = this.props.navigation
    return (
      <View style={styles.container}>
        <Button
          backgroundColor='#03A9F4'
          title='Sign Out'
          buttonStyle={{ marginTop: 20 }}
          backgroundColor='transparent'
          textStyle={{ color: '#bcbec1' }}
          onPress={() => onSignOut().then(() => this.disableBackButtonIfOnTop(navigation))}
          />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}
