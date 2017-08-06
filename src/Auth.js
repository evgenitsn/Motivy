import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin'
import firebase from '../firebase'

export const onSignIn = () => GoogleSignin.signIn()
    .then((user) => {
        let credential = {
          token: user.idToken, 
          secret: user.serverAuthCode, 
          provider: 'google', 
          providerId: 'google'
        }
        return firebase.auth().signInWithCredential(credential)
          .then(user => user)
          .catch(error => error)
    })
    .catch((error) => {
      console.warn('WRONG SIGNIN', error)
      return error
    })


export const onSignOut = () => GoogleSignin.signOut()
  .then(() => {
    console.warn('User', JSON.stringify(GoogleSignin.currentUser()))
  })
  .catch((err) => {
    console.log('err', err)
  })


export const isSignedIn = () => GoogleSignin.currentUserAsync().then(user => user)
