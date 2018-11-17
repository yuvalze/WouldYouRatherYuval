import React, {Component}  from 'react'
import Dropdown from 'react-dropdown'
import { connect } from 'react-redux'
import {getAnsweredQuestionsArr} from '../utils/helpers'
import {handleGetQuestions} from '../actions/questions'


const isShowAnsweredDropDown = [
    {label: 'Unanswered questions list', value: 'Unanswered'},
    {label: 'Answered questions list', value: 'Answered'}
];

class QuestionsList extends Component {

    state = {
        isShowAnswered : 'Unanswered'
    }

    constructor() {
        super();
        this.onSelectIsShowAnswered = this.onSelectIsShowAnswered.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(handleGetQuestions())
    }

    onSelectIsShowAnswered = (selectObj) => {
        this.setState({
            isShowAnswered: selectObj.value
        })
    }

    toPoll = (e, question_id) => {
        e.preventDefault()
        this.props.history.push(`/questions/${question_id}`)
    }

    render() {
        const questionsArr = getAnsweredQuestionsArr(
            this.props.authedUser, 
            this.props.questions, 
            this.state.isShowAnswered === 'Answered');
        return (
            <div>
                <div>
                     <Dropdown options={isShowAnsweredDropDown} onChange={this.onSelectIsShowAnswered}
                                                    value={this.state.isShowAnswered} placeholder="Select To Show" />
                </div>
                <div>
                    <ul>
                        {questionsArr.map((question) => (
                            <li key={question.id}>
                                <button onClick={(e) => this.toPoll(e, question.id)}>
                                    <div>
                                        <h2> {(this.props.users[question.author] ||{}).name} ask:</h2>
                                        <div className='blockQuestionsList'>
                                            <h3> {question.optionOne.text} </h3>
                                            <div> or </div>
                                            <h3> {question.optionTwo.text} </h3>
                                        </div>
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}


function mapStateToProps ({ authedUser, questions, users}) {
    return {
        authedUser,
        questions,
        users
    }
  }
  
export default connect(mapStateToProps)(QuestionsList)
