import React, { Component } from 'react'
import { createRootNavigator } from './Routes'
import { isSignedIn, googleConfigure } from './Auth'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      signedIn: false,
      checkedSignIn: false
    }
  }

  componentWillMount () {
    googleConfigure()
  }

  componentDidMount () {
    isSignedIn().then(res => {
      if (res !== null && res.uid !== null) {
        this.setState({ user: res, signedIn: true, checkedSignIn: true })
      } else {
        this.setState({ signedIn: false, checkedSignIn: true })
      }
    })
  }

  render () {
    const { checkedSignIn, signedIn } = this.state
    if (!checkedSignIn) {
      // TODO Here we can return a component that looks like a splashscreen instead of null,
      // because there is white screen for a second
      return (null)
    }

    const Layout = createRootNavigator(signedIn)
    return <Layout />
  }
}
