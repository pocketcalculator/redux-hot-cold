export const SET_GUESSES = 'SET_GUESSES'
export const setGuesses = guesses => ({
  type: SET_GUESSES,
  guesses
})

export const SET_FEEDBACK = 'SET_FEEDBACK'
export const setFeedback = feedback => ({
  type: SET_FEEDBACK,
  feedback
})

export const SET_AURALSTATUS = 'SET_AURALSTATUS'
export const setAuralStatus = auralStatus => ({
  type: SET_AURALSTATUS,
  auralStatus
})
