import React, { Component } from 'react'
import { connect } from 'react-redux'

class Poll extends Component {

    state = {
        chooseResult: 'optionOne'
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
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

function mapStateToProps ({ questions, users }, props) {
    const { question_id } = props.match.params

    return {
        question_id,
        questionData: questions[question_id],
        users : users[0]
    }
}

export default connect(mapStateToProps)(Poll)