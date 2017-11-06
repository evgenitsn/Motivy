import {
 SELECTED_QUOTE,
 NONE_SELECTED
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
