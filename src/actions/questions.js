import { getQuestionsData } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

function receiveQuestions (questions) {
    return {
      type: RECEIVE_QUESTIONS,
      questions
    }
  }

  export function handleGetQuestions () {
    return (dispatch) => {
      return getQuestionsData()
        .then( questionsObj => {
            console.log('handleGetQuestions questionsObj')
            console.log(questionsObj)
          dispatch(receiveQuestions(questionsObj))
        })
    }
  }