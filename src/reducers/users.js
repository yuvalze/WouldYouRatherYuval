import { RECEIVE_USERS } from '../actions/users'
import { SEND_QUESTIONS, SEND_NEW_QUESTION } from '../actions/questions'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
      case SEND_QUESTIONS :
        return {
          ...state,
          [action.authedUser]: {
            ...state[action.authedUser],
            answers: {
              ...state[action.authedUser].answers,
              [action.qid]: action.answer
            }
          }
        }
      case SEND_NEW_QUESTION:
        return {
          ...state,
          [action.formattedQuestionObj.author]: {
            ...state[action.formattedQuestionObj.author],
            questions: (state[action.formattedQuestionObj.author].questions).concat([action.formattedQuestionObj.id])
          }
        }
    default :
      return state
  }
}
