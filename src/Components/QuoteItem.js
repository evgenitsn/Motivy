import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../Actions'

const QuoteItem = (props) => {
  const goDetails = () => {
    props.selectQuote(props.quote)
    props.navigation.navigate('QuoteDetails')
  }

  return (
    <TouchableWithoutFeedback onPress={() => goDetails()}>
      <View style={styles.card}>
        <Image source={{uri: props.quote.downloadURL}} style={styles.image} />
        <Text style={styles.title}>File name: {props.quote.imgFileName}</Text>
        <Text style={styles.action}>Text: {props.quote.imgText}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default connect(null, actions)(QuoteItem)

const styles = {
  card: {
    flex: 1,
    width: 353,
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20
  },
  title: {
    fontSize: 24
  },
  image: {
    height: 150,
    width: 150
  },
  action: {
    backgroundColor: 'black',
    color: 'white'
  }
}
