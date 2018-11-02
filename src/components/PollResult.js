import React, { Component } from 'react'
import PropTypes from 'prop-types';

class PollResult extends Component {


    render() {
        const { questionData, authorUserData, authedUserId } = this.props
        const userNameAskAvatarUrl = authorUserData.avatarURL;
        const userNameAskName = authorUserData.name;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Result...</legend>
                        <p>
                            <img
                                src={userNameAskAvatarUrl}
                                alt={`Avatar of ${userNameAskName}`}
                                className='avatar'
                            />
                            <div>
                                <label>
                                    <input type='radio' name='question' value='optionOne' 
                                        checked={questionData.optionOne.votes.includes(authedUserId)}/>
                                    {questionData.optionOne.text}
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type='radio' name='question' value='optionTwo'
                                         checked={questionData.optionTwo.votes.includes(authedUserId)}/>
                                    {questionData.optionTwo.text}
                                </label>
                            </div>
                        </p>
                    </fieldset>
                </form>
            </div>
        )
    }
}

PollResult.propTypes = {
    questionData: PropTypes.object.isRequired,
    authedUserId: PropTypes.object.isRequired,
    authorUserData: PropTypes.object.isRequired
  };

export default PollResult