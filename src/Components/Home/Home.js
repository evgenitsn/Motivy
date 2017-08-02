import React, { Component } from 'react'
import { View, Image } from 'react-native'

export default class Home extends Component {
  render () {
    const {navigate} = this.props.navigation
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
    </View>
    )
  }
}

