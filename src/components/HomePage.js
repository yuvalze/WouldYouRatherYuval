import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleGetQuestions} from '../actions/questions'
import Nav from './Nav'

class HomePage extends Component {

    componentDidMount() {
        this.props.dispatch(handleGetQuestions())
      }
    
    render() {
        console.log('HomePage render props');
        console.log(this.props);
        return (
            <div>
                <div>
                   <h1> Hello {this.props.authedUser} </h1>
                </div>
                <Nav />
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, questions}) {
    console.log('HomePage mapStateToProps authedUser')
    console.log(authedUser)
    console.log('HomePage mapStateToProps questions')
    console.log(questions)
    return {
        authedUser,
        questions
    }
  }
  
export default connect(mapStateToProps)(HomePage)
