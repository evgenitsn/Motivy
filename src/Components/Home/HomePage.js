import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import Collapsible from 'react-native-collapsible'
import * as Animatable from 'react-native-animatable'

import { ShareComponent } from './ShareComponent'

export default class HomePage extends Component {
  constructor () {
    super()

    this.state = {
      isCollapsed: true
    }

    this.toggleShare = this.toggleShare.bind(this)
  }

  toggleShare () {
    this.setState({isCollapsed: !this.state.isCollapsed})
    this.refs.btn.tada(3000)
  }

  render () {
    const {navigate} = this.props.navigation
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Animatable.View
            animation='zoomOuta'
            easing='ease-out'
            iterationCount={3}
          >
            <Image
              source={require('../../Assets/quote.jpg')}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                height: 300,
                width: 300,
                borderWidth: 1,
                borderRadius: 15,
                marginBottom: 160,
                marginTop: 50
              }}
            />
          </Animatable.View>
          <Animatable.View ref='btn'>
            <Button
              title='Share'
              onPress={this.toggleShare}
              icon={{name: 'share'}}
              backgroundColor={'#1A9'}
              borderRadius={20}
              buttonStyle={{
                width: 150
              }}
            />
          </Animatable.View>
        </View>
        <Collapsible
          collapsed={this.state.isCollapsed}
          duration={300}
          align={'top'}
        >
          <ShareComponent navigate={navigate}/>
        </Collapsible>
      </View>
    )
  }
}

Animatable.initializeRegistryWithDefinitions({
  zoomOuta: {
    0: {
      scale: 1
    },
    0.5: {
      scale: 1.15
    },
    1: {
      scale: 1
    }
  }
})
