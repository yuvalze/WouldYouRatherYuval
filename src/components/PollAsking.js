import React, { Component } from 'react'
import { handleSaveQuestionAnswer } from '../actions/questions'
import PropTypes from 'prop-types';

class PollAsking extends Component {

    state = {
        chooseResult: 'optionOne'
    }

    handleSubmit = (e) => {
        const {authedUserId, questionData} = this.props;
        const {chooseResult} = this.state;
        e.preventDefault();
        this.props.dispatch(handleSaveQuestionAnswer(authedUserId, questionData.id, chooseResult));
    }

    handleChange = (e) => {
        const chooseResult = e.target.value
        this.setState(() => ({
            chooseResult
        }))
    }

    render() {
        const { questionData, authorUserData } = this.props
        const userNameAskAvatarUrl = authorUserData.avatarURL;
        const userNameAskName = authorUserData.name;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Would You Rather...</legend>
                        <div>
                            <img
                                src={userNameAskAvatarUrl}
                                alt={`Avatar of ${userNameAskName}`}
                                className='avatar'
                            />
                            <div>
                                <label>
                                    <input type='radio' name='question' value='optionOne' checked={this.state.chooseResult === 'optionOne'} 
                                        onChange={this.handleChange}/>
                                    {questionData.optionOne.text}
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type='radio' name='question' value='optionTwo' checked={this.state.chooseResult === 'optionTwo'}
                                         onChange={this.handleChange}/>
                                    {questionData.optionTwo.text}
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <button
                        className='btn'
                        type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

PollAsking.propTypes = {
    questionData: PropTypes.object.isRequired,
    authedUserId: PropTypes.string.isRequired,
    authorUserData: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

export default PollAsking