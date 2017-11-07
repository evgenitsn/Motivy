import React, { Component } from 'react'
import { View, ListView, Text } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import QuoteItem from './QuoteItem'
import { loadQuotes } from '../Actions'

class QuotesList extends Component {
  componentWillMount () {
    this.props.loadQuotes()
  }

  renderData () {
    if (this.props.quotes.length < 1) {
      return (<View><Text>LOADING</Text></View>)
    } else {
      return (<ListView
        enableEmptySections
        showsVerticalScrollIndicator={false}
        dataSource={this.dataSource}
        renderRow={(rowData) => <QuoteItem navigation={this.props.navigation} quote={rowData} />}
      />)
    }
  }

  render () {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.dataSource = ds.cloneWithRows(this.props.quotes)
    return (
      <View style={styles.container}>
        {this.renderData()}
      </View>
    )
  }
}

const mapStateToProps = state => {
  const quotes = _.map(state.quotes, (val, uid) => {
    return { ...val, uid }
  })
  return {
    quotes: quotes,
    detailView: state.detailView
  }
}

export default connect(mapStateToProps, { loadQuotes })(QuotesList)

const styles = {
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20
  }
}
