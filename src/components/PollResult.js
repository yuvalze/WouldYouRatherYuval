import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {getQuestionStatistics} from '../utils/helpers'

class PollResult extends Component {


    render() {
        const { questionData, authorUserData, authedUserId } = this.props
        const questionStatistics = getQuestionStatistics(questionData, authedUserId);
        const userNameAskAvatarUrl = authorUserData.avatarURL;
        const userNameAskName = authorUserData.name;
        return (
            <div>
                <fieldset>
                    <legend>Results:</legend>

                        <h2>Asked by {userNameAskName}</h2>
                        <div>
                            <img
                                src={userNameAskAvatarUrl}
                                alt={`Avatar of ${userNameAskName}`}
                                className='avatar'
                            />
                            <span class='spanBlockYellow'>
                                {questionStatistics.optionSelectedByUser === 'optionOne' &&
                                    <div>
                                        <h2>***Your Votes***</h2>
                                    </div>
                                }
                                <div>
                                    {questionData.optionOne.text}
                                </div>
                                <div>
                                    {questionStatistics.optionOnePercent} %
                                </div>
                                <div>
                                    {questionStatistics.optionOneNumber} out of {questionStatistics.totalNumberVote} votes
                                </div>
                            </span>
                            <span class='spanBlockGreen'>
                                {questionStatistics.optionSelectedByUser === 'optionTwo' &&
                                    <div>
                                        <h2>***Your Votes***</h2>
                                    </div>
                                }
                                <div>
                                    {questionData.optionTwo.text}
                                </div>
                                <div>
                                    {questionStatistics.optionTwoPercent} %
                                </div>
                                <div>
                                    {questionStatistics.optionTwoNumber} out of {questionStatistics.totalNumberVote} votes
                                </div>
                            </span>
                        </div>
                </fieldset>
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