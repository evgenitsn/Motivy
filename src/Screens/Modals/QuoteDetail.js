import React, { Component } from 'react'
import { Text, Image, ScrollView, View } from 'react-native'
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
          <View>
            <Image resizeMode='contain' source={{uri: this.props.quoteSelected.downloadURL}} style={styles.image} />
          </View>
          <View style={styles.details}>
            <Icon name={'person'} size={20} />
            <Icon name={'close'} size={20} onPress={() => this.goBack()} />
            <Text>File name: {this.props.quoteSelected.imgFileName}</Text>
            <Text>Text: {this.props.quoteSelected.imgText}</Text>
          </View>
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
    height: 350,
    marginBottom: 45
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40
  }
}
