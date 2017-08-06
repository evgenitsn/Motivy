import React, { Component } from 'react'
import { SignedOut, SignedIn, createRootNavigator } from './Routes'
import { GoogleSignin } from 'react-native-google-signin'

import { isSignedIn } from './Auth'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      checkedSignIn: false
    }
  }

  componentDidMount() {
    isSignedIn().then(res => {
      //console.warn('USER', res)
      if(res){
        this.setState({user: res, signedIn: true, checkedSignIn: true})
      } else {
        this.setState({ signedIn: false, checkedSignIn: true })
      }
    })
  }

  componentWillMount() {
    GoogleSignin.configure({
      webClientId: '595563945271-ptbkp04d416clj1sa50imotkk92jhq8c.apps.googleusercontent.com'
    })
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
