import { getQuestionsData, saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SEND_QUESTIONS = 'SAVE_QUESTIONS'

function receiveQuestions (questions) {
    return {
      type: RECEIVE_QUESTIONS,
      questions
    }
  }

  function sendQuestionAnswer ({authedUser, qid, answer}) {
    return {
      type: SEND_QUESTIONS,
      authedUser,
      qid,
      answer
    }
  }

  export function handleGetQuestions () {
    return (dispatch) => {
      return getQuestionsData()
        .then( questionsObj => {
          dispatch(receiveQuestions(questionsObj))
        })
    }
  }

  export function handleSaveQuestionAnswer(authedUser, qid, answer) {
    return dispatch => {
      return saveQuestionAnswer(authedUser, qid, answer)
        .then(() => {
          dispatch(sendQuestionAnswer({authedUser, qid, answer}))
        })
    }
  }