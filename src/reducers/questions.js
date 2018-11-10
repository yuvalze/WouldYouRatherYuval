import { RECEIVE_QUESTIONS, SEND_QUESTIONS, SEND_NEW_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
      case SEND_QUESTIONS :
        return {
          ...state,
          [action.qid]: {
            ...state[action.qid],
            [action.answer]: {
              ...state[action.qid][action.answer],
              votes: state[action.qid][action.answer].votes.concat([action.authedUser])
            }
          }
        }
      case SEND_NEW_QUESTION:
        return {
          ...state,
          [action.formattedQuestionObj.id]: {
            ...action.formattedQuestionObj
          }
        }
    default :
      return state
  }
}
