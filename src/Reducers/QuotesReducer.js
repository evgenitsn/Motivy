import {
  SELECTED_QUOTE,
  NONE_SELECTED,
  FETCH_DATA,
  FETCH_FEATURED_QUOTE
 } from '../Utils/constants'

const initialState = {
  featuredQuote: {},
  quotes: [],
  detailView: false,
  quoteSelected: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        quotes: action.payload
      }
    case FETCH_FEATURED_QUOTE:
      return {
        ...state,
        featuredQuote: action.payload
      }
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
