import React, { Component } from 'react'
import { View, Image } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

export default class Home extends Component {
  render () {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
          <Image
            source={require('../Assets/quote.jpg')}
            style={styles.image}
        />
        </LinearGradient>
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
    marginBottom: 100,
    marginTop: 50
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
}
