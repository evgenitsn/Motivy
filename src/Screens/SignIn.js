import React, { Component } from 'react'
import { View, Button } from 'react-native'
import { onSignIn } from '../Auth'
import { NavigationActions } from 'react-navigation'

export default class SignIn extends Component {
  disableBackButtonIfOnTop(navigation) {
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
  }

  render () {
    // TODO: Disable account login
    let navigation = this.props.navigation
        return (
            <View style={styles.container}>
                <Button 
                  title='Sign In with Google' 
                  buttonStyle={{ marginTop: 20 }}
                  backgroundColor="transparent"
                  textStyle={{ color: "#bcbec1" }}
                  onPress={() => {
                    onSignIn().then((res) => {
                      //console.warn(JSON.stringify(res))
                      if(res.uid){
                        this.disableBackButtonIfOnTop(navigation)
                      } else {
                        //TODO Add alert here
                        //console.warn('Your ACCOUNT WAS DISABLED')
                      }
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
