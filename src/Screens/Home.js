import React, { Component } from 'react'
import { View, Image } from 'react-native'

import { connect } from 'react-redux'
import { loadFeaturedQuote } from '../Actions'

import LinearGradient from 'react-native-linear-gradient'

class Home extends Component {
  componentWillMount () {
    this.props.loadFeaturedQuote()
  }
  render () {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#f5f7fa', '#c3cfe2']} style={styles.linearGradient}>
          <Image
            source={{uri: this.props.featuredQuote.downloadURL}}
            style={styles.image}
          />
        </LinearGradient>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    featuredQuote: state.featuredQuote
  }
}

export default connect(mapStateToProps, { loadFeaturedQuote })(Home)

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
