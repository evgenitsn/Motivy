import React, { Component } from 'react'
import firebase from '../../../firebase'
import { View, Image, Button, Text } from 'react-native'
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null
    }
  }

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
            this.setState({user: user});
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
      this.setState({user: null});
    })
    .catch((err) => {
      console.log('err', err)
    })
  }

  render () {
    if (!this.state.user) {
      return (
        <View style={styles.container}>
          <Text>Hello stranger, tap the button to login :)</Text>
          <GoogleSigninButton
            style={{width: 120, height: 44}}
            color={GoogleSigninButton.Color.Light}
            size={GoogleSigninButton.Size.Icon}
            onPress={() => this.loginGoogle()}
          />
        </View>
      )
    }
    if (this.state.user) {
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>Welcome {this.state.user.name}</Text>
          <Text>Your email is: {this.state.user.email}</Text>
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
          <Button title='Logout' onPress={() => this.logout()} />
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
  }
}
