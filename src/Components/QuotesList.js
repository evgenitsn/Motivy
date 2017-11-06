import React, { Component } from 'react'
import { View, ListView } from 'react-native'
import { connect } from 'react-redux'
import QuoteItem from './QuoteItem'

class QuotesList extends Component {
  componentWillMount () {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.dataSource = ds.cloneWithRows(this.props.quotes)
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={(rowData) => <QuoteItem navigation={this.props.navigation} quote={rowData} />}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
    detailView: state.detailView
  }
}

export default connect(mapStateToProps)(QuotesList)

const styles = {
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 30
  }
}
