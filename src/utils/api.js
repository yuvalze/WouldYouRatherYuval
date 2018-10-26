import {
    _getUsers,
    _getQuestions
  } from './_DATA.js'
  
  export function getInitialData () {
    return Promise.all([
      _getUsers()
    ]).then(users => users)
  }

  export function getQuestionsData () {
    return _getQuestions().then(questions => questions)
  }