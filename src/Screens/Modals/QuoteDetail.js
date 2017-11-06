import React, { Component } from 'react'
import { Text, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import * as actions from '../../Actions'

class QuoteDetails extends Component {
  goBack () {
    this.props.navigation.goBack()
    this.props.noneSelected()
  }
  render () {
    if (!this.props.quoteSelected) {
      return null
    } else {
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={{uri: this.props.quoteSelected.downloadURL}} style={styles.image} />
          <Icon name={'person'} size={20} />
          <Icon name={'close'} size={20} onPress={() => this.goBack()} />
          <Text>File name: {this.props.quoteSelected.imgFileName}</Text>
          <Text>Text: {this.props.quoteSelected.imgText}</Text>
        </ScrollView>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
    quoteSelected: state.quoteSelected
  }
}

export default connect(mapStateToProps, actions)(QuoteDetails)

const styles = {
  image: {
    flex: 0,
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center'
  }
}
