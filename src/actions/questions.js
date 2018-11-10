import { getQuestionsData, saveQuestionAnswer, saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SEND_QUESTIONS = 'SAVE_QUESTIONS'
export const SEND_NEW_QUESTION = 'SEND_NEW_QUESTION'

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

  function sendNewQuestion (formattedQuestionObj) {
    return {
      type: SEND_NEW_QUESTION,
      formattedQuestionObj
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

  export function handleAddNewQuestion(optionOneText, optionTwoText, author) {
    return dispatch => {
      return saveQuestion(optionOneText, optionTwoText, author)
        .then(formattedQuestionObj => {
          dispatch(sendNewQuestion(formattedQuestionObj))
        })
    }
  }