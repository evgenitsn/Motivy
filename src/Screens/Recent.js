import React, { Component } from 'react'
import { View, Text, Button, ListView, Image } from 'react-native'
import firebase from 'react-native-firebase'
import { QuotesList } from '../Components'

export default class Recent extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Recent List</Text>
        <QuotesList navigation={this.props.navigation} />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1
  },
  title: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 10
  }
}
