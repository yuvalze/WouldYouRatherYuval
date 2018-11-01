import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isUserAnsweredQuestion } from '../utils/helpers'
import { handleSaveQuestionAnswer } from '../actions/questions'

class Poll extends Component {

    state = {
        chooseResult: 'optionOne'
    }

    handleSubmit = (e) => {
        const {authedUser, questionData} = this.props;
        const {chooseResult} = this.state;
        e.preventDefault();
        this.props.dispatch(handleSaveQuestionAnswer(authedUser, questionData.id, chooseResult));
    }

    handleChange = (e) => {
        const chooseResult = e.target.value
        this.setState(() => ({
            chooseResult
        }))
    }

    render() {
        const { questionData } = this.props
        const userNameAskAvatarUrl = ((this.props.users || {})[(questionData ||{}).author]).avatarURL;
        const userNameAskName = ((this.props.users || {})[(questionData ||{}).author]).name;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Would You Rather...</legend>
                        <p>
                            <img
                                src={userNameAskAvatarUrl}
                                alt={`Avatar of ${userNameAskName}`}
                                className='avatar'
                            />
                            <div>
                                <label>
                                    <input type='radio' name='question' value='optionOne' checked={this.state.chooseResult === 'optionOne'} onClick={this.handleChange}/>
                                    {questionData.optionOne.text}
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type='radio' name='question' value='optionTwo' checked={this.state.chooseResult === 'optionTwo'} onClick={this.handleChange}/>
                                    {questionData.optionTwo.text}
                                </label>
                            </div>
                        </p>
                    </fieldset>
                    {!this.props.isAnswered &&
                    <button
                        className='btn'
                        type='submit'>
                        Submit
                    </button>}
                </form>
            </div>
        )
    }
}

function mapStateToProps ({ questions, users, authedUser}, props) {
    const { question_id } = props.match.params

    return {
        question_id,
        questionData: questions[question_id],
        users,
        isAnswered: isUserAnsweredQuestion(question_id, users[authedUser]),
        authedUser
    }
}

export default connect(mapStateToProps)(Poll)