import {SET_GUESSES, SET_FEEDBACK, SET_AURALSTATUS} from '../actions'

const initialState = {
  guesses = [1, 23, 88],
  feedback = 'feedback!',
  auralStatus = 'Here is the status of the game:'
}

export const gameReducer = (state=initialState, action) => {
  if (action.type === SET_GUESSES) {
    return Object.assign({}, state, {
      guesses: action.guesses
    })
  }
  else if (action.type === SET_FEEDBACK) {
    return Object.assign({}, state, {
      guesses: action.feedback
    })
  }
  else if (action.type === SET_AURALSTATUS) {
    return Object.assign({}, state, {
      auralStatus: action.auralStatus
    })
  }
  return state
}
