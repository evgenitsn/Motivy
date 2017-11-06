import quotes from './quotes.json'
import {
  SELECTED_QUOTE,
  NONE_SELECTED
 } from '../Utils/constants'

const initialState = {
  quotes,
  detailView: false,
  quoteSelected: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_QUOTE:
      return {
        ...state,
        detailView: true,
        quoteSelected: action.payload
      }
    case NONE_SELECTED:
      return {
        ...state,
        detailView: false,
        quoteSelected: null
      }
    default:
      return state
  }
}
