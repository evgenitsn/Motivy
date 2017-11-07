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
        <View style={styles.info}>
          <Text style={styles.title}>File name: {props.quote.imgFileName}</Text>
          <Text style={styles.text}>Text: {props.quote.imgText}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default connect(null, actions)(QuoteItem)

const styles = {
  card: {
    borderColor: 'white',
    borderWidth: 3,
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: 'white'
  },
  info: {
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    fontSize: 24
  },
  image: {
    height: 100,
    width: 100,
    marginRight: 20
  },
  text: {
    fontSize: 16
  }
}
