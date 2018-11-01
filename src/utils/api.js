import {
    _getUsers,
    _getQuestions,
    _saveQuestionAnswer
  } from './_DATA.js'
  
  export function getInitialData () {
    return Promise.all([
      _getUsers()
    ]).then(users => users)
  }

  export function getQuestionsData () {
    return _getQuestions().then(questions => questions)
  }

  export function saveQuestionAnswer (authedUser, qid, answer) {
    return _saveQuestionAnswer({authedUser, qid, answer})
  }
