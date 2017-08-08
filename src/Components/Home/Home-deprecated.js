import React, { Component } from 'react'
import firebase from '../../Firebase'

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
