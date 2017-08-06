import React, { Component } from 'react'
import firebase from '../../../firebase'
import { View, Image, Button, Text, ActivityIndicator } from 'react-native'
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin'

export default class Home extends Component {
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
}
