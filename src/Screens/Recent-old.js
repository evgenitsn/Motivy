import React, { Component } from 'react'
import { View, Text, Button, ListView, Image } from 'react-native'
import firebase from 'react-native-firebase'
import { connect } from 'react-redux'
import QuoteItem from '../Components/QuoteItem'

export default class Recent extends Component {
  constructor (props) {
    super(props)
    let quotes = []
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      recentQuotes: dataSource.cloneWithRows(quotes)
    }
  }

  componentDidMount () {
    let self = this
    let firebaseQuotesRef = firebase.database().ref('quotes')
    firebaseQuotesRef.on('value', function (snapshot) {
      let collection = snapshot.val().filter(el => el !== null)
      self.setState({recentQuotes: self.state.recentQuotes.cloneWithRows(collection)})
    })
  }

  render () {
    console.log(this.state.recentQuotes)
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>Recent List</Text>
        <ListView
          enableEmptySections
          dataSource={this.state.recentQuotes}
          renderRow={(rowData) => {
            return (
              <View>
                <Text>{rowData.imgText}</Text> 
                <Image style={{flex: 1, maxWidth: '100%', height: 200}} source={{'uri': rowData.downloadURL}} />
              </View>
            )
          }}
        />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    width: 353,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20
  }
}
