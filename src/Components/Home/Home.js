import React, { Component } from 'react'
import firebase from '../../../firebase'
import { View, Image, Button } from 'react-native'

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

  uploadImage () {
    let file = `iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABBBJREFUeNrsndtNG0EUhodLiCUeFimPKIqlFOB0YDqADnAHlBA6gA6cDnAHOBUABUQ2SgEbnhISw2ZHHivBSmzv7O7czvdJR4qCZ3c859+zM2cuVgoAAAAAAAAApLAl5Hv2Szsy1jX2L6bGxsY+I5G4nT4sLS+tsLTcXKNPc8bl+OsaTv+fXSOEsHlX2lULjl+2K3MvCIjjmqHe5tVwTLOHwYVDxy/bBc3vl6FH5y9siBvkOh8RCAz7vA4C6PAVgRodQwdDvTxgAeQMEdvlKmDn/50niIaY5gJ0Fm7cwHVG5jq3S///Qc3nCk4auIe+DvMIDVM3vfuxtGyD+2Tms3XTxtDw02/rjJvSehb37Jmytvdl3iCAMf/Nhk/9qmhgKwJyAw2Se3B+XRHkuM1v+O81WIdeqq+B7QgEcGRR5ry0uwbrcGeu6aLu0EDvP2uhHhmjAT9MAkrEVE1ETXgF1Kdb8fPjFusybrnuCKABbiO9NgIA98QwF1AE9J10R/BbSm2MAOKvD68AQACAAAABAAIABAAAAADrCS1LpTdVdBNv82lp90jvJXpLVdV5/5htothG9sL5hVBDBMKe/OhWDLl45xfCzetmUt+JoC4B0G8bkAkUDgJAAIAAAAEAAgAEANLYFfid9br+T2q+zWuxxv9AzXfyDsy/wRF1jn6xPbVj1c7hTLk/gbSPANzYaYV6nSKAtARgc17PEAGkIYBc2R0YkSk3p5J6FYCEUYDu8D1YlHswZRkGRs7YU1kEENCwz0dZBJCAABQCiJ9ujbIHCCB+jjyVRQCBMKgxDBwggPjRYfzSotylYl6gdVymgs8q1OtMkQpOTgCLU0TXTQa5/lkaMoEOOVGrfxJm3d8h8giwyU6cCREgXc4b+gxEGAGq7MObEAFkPv1EgUQjgM0u3AkRQObTLyoKSJkNHFmUGymmg5NgseS7Cpkpk3wqWMq+gJEC8gCAAAABAAIABAAIABAA+BbAFBf4bQPfArgXLoKp4uRwDosGjov3Bj8YQdgHAACZhNIH0Asv3pb2Wki7P5b2VQWw4igEAejVN++FPoBflN35RY0Rwoqgw9KehQrgULoAOqYOUgWwK70CO4KdjwLVPCuGAIT3ARCA8AjwhBtkR4ACN9AHAPoAQB8A6AO0FGFyi0ijl8u9QQDxRwB9/e+WZWcqvEUzdAIroh2oU84/KpbrqD9LuBBA5J3AfQsB7EvooEoaBuq1Bo8VPqsQQFrDwE4FAXSkDE+lJYJelfZrg88oBJBeBNDsbSCAPSUoOSUxFbxrhner2gMBJBoBnlY4f/F3HSF2EEB6EWCm1ieddH1+mnbZQQDpRIBnVS3jODNi2EYAaUSAJ0dlomNLQB2KwNuHBTEAAAAAAOCQ3wIMANSH+ucFs/mAAAAAAElFTkSuQmCC`
    let metadata = {
      contentType: 'image/jpeg'
    }
    firebase.storage().ref().child('images/quote').put(file, metadata).then(console.warn('?'))
  }

  loginGoogle () {
    firebase.auth().createUserWithEmailAndPassword('foo@bar.com', '123456')
    .then((user) => {
      console.warn('user created', user)
    })
    .catch((err) => {
      console.warn('An error occurred', err)
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
        <Button title='Click' onPress={() => this.loginGoogle()} />
      </View>
    )
  }
}
