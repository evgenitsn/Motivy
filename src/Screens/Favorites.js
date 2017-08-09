import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Favorites extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>Favorites Screen</Text>
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
