import React, { Component } from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { GoogleSigninButton } from 'react-native-google-signin'

import { Logo } from '../Components'

import { onSignIn } from '../Auth'

export default class SignIn extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: false
    }
  }

  disableBackButtonIfOnTop (navigation) {
    navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        key: null,
        actions: [
          NavigationActions.navigate({
            routeName: 'SignedIn',
            action: [NavigationActions.navigate({routeName: 'Home'})]
          })
        ]
      })
    )
  }

  login () {
    let navigation = this.props.navigation
    this.setState({isLoading: true})
    // TODO Disable account login
    onSignIn().then((res) => {
      this.setState({isLoading: false})
      if (res.uid) {
        this.disableBackButtonIfOnTop(navigation)
      } else {
        // TODO Add alert here
        // console.warn('Your ACCOUNT WAS DISABLED')
      }
    }).catch((e) => console.warn(e))
  }

  render () {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator
            animating
            style={{height: 80}}
            size={100}
          />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Logo />
            <Text style={styles.heading}>M O T I V Y</Text>
          </View>
          <GoogleSigninButton
            style={{width: '60%', height: '10%'}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => this.login()}
            />
        </View>
      )
    }
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 200
  },
  heading: {
    marginTop: 50,
    fontSize: 48,
    color: '#000000'
  }
}
