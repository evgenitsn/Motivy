import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

import { isSignedIn } from '../Auth'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      user: ''
    }
  }

  componentWillMount() {
    isSignedIn().then((res) => {
      this.setState({user: res})
    })
  } 
  
  signOut () {
    console.log('Sign in function')
  }

  render () {
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>Welcome {this.state.user.name}</Text>
          <Text>Your email is: {this.state.user.email}</Text>
          <Image
            source={require('../Assets/quote.jpg')}
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
