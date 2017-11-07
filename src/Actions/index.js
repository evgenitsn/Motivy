import firebase from 'react-native-firebase'
import {
 SELECTED_QUOTE,
 NONE_SELECTED,
 FETCH_DATA
} from '../Utils/constants'

export const selectQuote = (quoteId) => {
  return {
    type: SELECTED_QUOTE,
    payload: quoteId
  }
}

export const noneSelected = () => {
  return {
    type: NONE_SELECTED
  }
}

export const loadQuotes = () => {
  return (dispatch) => {
    firebase.database().ref('quotes')
    .on('value', snapshot => {
      let values = snapshot.val().filter(x => x !== null)
      dispatch({ type: FETCH_DATA, payload: values })
    })
  }
}
