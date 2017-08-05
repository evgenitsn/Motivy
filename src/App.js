import React, { Component } from 'react'
import { SignedOut, SignedIn, createRootNavigator } from './Routes'

import { isSignedIn } from './Auth'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      signedIn: false,
      checkedSignIn: false
    }
  }

  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }

  render () {
    const { checkedSignIn, signedIn } = this.state
    if(!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn)
    return <Layout/>
  }
}
