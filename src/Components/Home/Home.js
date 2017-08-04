import React, { Component } from 'react'
import firebase from '../../../firebase'
import { View, Image, Button } from 'react-native'
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin'

export default class Home extends Component {
  componentWillMount () {
    GoogleSignin.configure({
      webClientId: '595563945271-ptbkp04d416clj1sa50imotkk92jhq8c.apps.googleusercontent.com'
    })
  }

  componentDidMount () {
    GoogleSignin.currentUserAsync().then((user) => {
      // console.log('USER', user)
      this.setState({user: user})
    }).done()
  }

  writeUserData (userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture: imageUrl
    })
  }

  readData () {
    firebase.database().ref('/users/1233').once('value').then(function (snapshot) { console.warn(JSON.stringify(snapshot.val())) })
  }

  loginGoogle () {
    GoogleSignin.signIn()
      .then((user) => {
        console.log(user)
        let credential = {token: user.idToken, secret: user.serverAuthCode, provider: 'google', providerId: 'google'}
        firebase.auth().signInWithCredential(credential)
          .then((u) => {
            console.log('LOGGED! ', u)
          })
          .catch((e) => {
            console.log('err', e)
          })
      })
      .catch((err) => {
        console.log('WRONG SIGNIN', err)
      })
      .done()
  }

  logout () {
    const user = GoogleSignin.currentUser()
    console.log(JSON.stringify(user))
    GoogleSignin.signOut()
    .then(() => {
      console.log('out')
      const user = GoogleSignin.currentUser()
      console.log(JSON.stringify(user))
    })
    .catch((err) => {
      console.log('err', err)
    })
  }

  render () {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Image
          source={require('../../Assets/quote.jpg')}
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            height: 300,
            width: 300,
            borderWidth: 1,
            borderRadius: 15,
            marginBottom: 160,
            marginTop: 50
          }}
        />
        <GoogleSigninButton
          style={{width: 48, height: 48}}
          size={GoogleSigninButton.Size.Icon}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.loginGoogle.bind(this)} />
        <Button title='Click' onPress={() => this.logout()} />
      </View>
    )
  }
}
