export const SET_AURALSTATUS = 'SET_AURALSTATUS'
export const setAuralStatus = () => ({
  type: SET_AURALSTATUS
})

export const RESTART = 'RESTART';
export const restart = correctAnswer => ({
    type: RESTART,
    correctAnswer
})

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
    type: MAKE_GUESS,
    guess
})
