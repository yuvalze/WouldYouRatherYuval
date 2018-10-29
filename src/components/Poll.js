import React, { Component } from 'react'
import { connect } from 'react-redux'

class Poll extends Component {

    state = {
        chooseResult: 'optionOne'
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        const { questionData } = this.props
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Would You Rather...</legend>
                        <div> {questionData.author} ask:</div>
                        <div>
                            <input type='radio' id='optionOne'
                                   name='question' value='optionOne' onclick={()=>{}} checked />
                            <label for='optionOne'>{questionData.optionOne.text}</label>
                        </div>
                        <div>
                            <input type='radio' id='optionTwo'
                                   name='question' value='optionTwo' onclick={()=>{}}/>
                            <label for='optionTwo'>{questionData.optionTwo.text}</label>
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

function mapStateToProps ({ authedUser, questions }, props) {
    const { question_id } = props.match.params

    return {
        question_id,
        questionData: questions[question_id]
    }
}

export default connect(mapStateToProps)(Poll)