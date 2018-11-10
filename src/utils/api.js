import {
    _getUsers,
    _getQuestions,
    _saveQuestionAnswer,
    _saveQuestion
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

  export function saveQuestion(optionOneText, optionTwoText, author) {
    return _saveQuestion({optionOneText, optionTwoText, author})
  }
