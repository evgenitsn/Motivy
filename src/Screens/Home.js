import React, { Component } from 'react'
import { View, Image } from 'react-native'

export default class Home extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image
          source={require('../Assets/quote.jpg')}
          style={styles.image}
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
  },
  image: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 160,
    marginTop: 50
  }
}
