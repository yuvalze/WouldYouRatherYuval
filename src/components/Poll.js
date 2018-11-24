import React from 'react'
import { connect } from 'react-redux'
import { isUserAnsweredQuestion } from '../utils/helpers'
import PollAsking from './PollAsking'
import PollResult from './PollResult'
import NotFound from './NotFound'

function Poll(props) {
    const { questionData, authedUserId, users, dispatch } = props;
    const authorUserData = (users || {})[(questionData ||{}).author];
    if (!authorUserData) {
        return <NotFound />
      }
    return (
        <div>
            {props.isAnswered ? 
                <PollResult 
                    questionData={questionData}
                    authedUserId={authedUserId}
                    authorUserData={authorUserData}
                /> :
                <PollAsking
                    questionData={questionData}
                    authedUserId={authedUserId}
                    authorUserData={authorUserData}
                    dispatch={dispatch}
            />
            }
        </div>
    )
}

function mapStateToProps ({ questions, users, authedUser}, props) {
    const { question_id } = props.match.params

    return {
        questionData: questions[question_id],
        users,
        isAnswered: isUserAnsweredQuestion(question_id, users[authedUser]),
        authedUserId: authedUser
    }
}

export default connect(mapStateToProps)(Poll)