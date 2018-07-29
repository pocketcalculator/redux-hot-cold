import {
  RESTART,
  MAKE_GUESS,
  SET_AURALSTATUS
} from '../actions'

const initialState = {
  guesses: [],
  feedback: 'feedback!',
  auralStatus: 'Here is the status of the game:',
  correctAnswer: Math.round(Math.random() * 100) + 1
}

export const gameReducer = (state = initialState, action) => {
  if (action.type === RESTART) {
    return Object.assign({}, state, {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: action.correctAnswer
    })
  } else if (action.type === MAKE_GUESS) {
    let guess, feedback
    guess = parseInt(action.guess, 10)
    if (isNaN(guess)) {
      feedback = 'Please enter a valid number'
      return Object.assign({}, state, {
        guesses: [...state.guesses, guess],
        feedback
      })
    }
    const difference = Math.abs(guess - state.correctAnswer)
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...'
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...'
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.'
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!'
    }
    return Object.assign({}, state, {
      guesses: [...state.guesses, guess],
      feedback
    })
  } else if (action.type === SET_AURALSTATUS) {
    const {
      guesses,
      feedback
    } = state
    // If there's not exactly 1 guess, we want to
    // pluralize the nouns in this aural update.
    const pluralize = guesses.length !== 1;

    let auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize
        ? 'guesses'
        : 'guess'}.`

    if (guesses.length > 0) {
      auralStatus += ` ${pluralize
            ? 'In order of most- to least-recent, they are'
            : 'It was'}: ${guesses.reverse().join(', ')}`
    }

    return Object.assign({}, state, {
      auralStatus
    });
  }
  return state
}
