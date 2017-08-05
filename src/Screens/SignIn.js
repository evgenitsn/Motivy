import React, { Component } from 'react'
import { View, Button } from 'react-native'
import { onSignIn } from '../Auth'
import { NavigationActions } from 'react-navigation'

export default class SignIn extends Component {
  signIn () {
    console.log('Sign in function')
  }

  render () {
    
    let navigation = this.props.navigation
    return (
        <View style={styles.container}>
            <Button 
              title='Sign In with Google' 
              buttonStyle={{ marginTop: 20 }}
              backgroundColor="transparent"
              textStyle={{ color: "#bcbec1" }}
              onPress={() => {
                onSignIn().then(() => {
                  navigation.dispatch(
                    NavigationActions.reset({
                      index: 0,
                      key: null,
                      actions: [
                        NavigationActions.navigate({
                          routeName: 'SignedIn',
                          action: [NavigationActions.navigate({routeName: 'Home1'})]
                        })
                      ]
                    })
                  )
                }).catch((e) => console.warn(e))
              }}/>
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
