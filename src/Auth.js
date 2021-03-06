import { GoogleSignin } from 'react-native-google-signin'
import firebase from 'react-native-firebase'
import { GoogleWebClientId } from './Utils/constants'

export const onSignIn = () => GoogleSignin.signIn()
    .then((user) => {
      const {idToken, serverAuthCode} = user
      const credential = firebase.auth.GoogleAuthProvider.credential(idToken, serverAuthCode)
      return firebase.auth().signInWithCredential(credential)
          .then(loggedUser => loggedUser)
          .catch(error => error)
    })
    .catch((error) => {
      console.warn('WRONG SIGNIN', error)
      return error
    })

export const onSignOut = () => GoogleSignin.signOut()
  .then((res) => {
    if (res) {
      console.warn('Signed out', JSON.stringify(res))
    }
  })
  .catch((err) => {
    console.log('err', err)
  })

export const isSignedIn = () => GoogleSignin.currentUserAsync().then(user => user)
export const googleConfigure = () => GoogleSignin.configure(GoogleWebClientId).then(hasPlayServices())

const hasPlayServices = () => GoogleSignin.hasPlayServices({ autoResolve: true })
  .then(() => {
    // play services are available. can now configure library
  })
  .catch((err) => {
    console.warn('Play services error', err.code, err.message)
  })
