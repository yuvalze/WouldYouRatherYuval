import React, {Component} from 'react'
import { handleAddNewQuestion } from '../actions/questions'
import { connect } from 'react-redux'

class CreateQuestion extends Component {

    state = {
        optionOneText: '',
        optionTwoText: ''
      }

    handleOptionOneChange = (e) => {
        const optionOneText = e.target.value
    
        this.setState(() => ({
            optionOneText
        }))
      }

      handleOptionTwoChange = (e) => {
        const optionTwoText = e.target.value
    
        this.setState(() => ({
            optionTwoText
        }))
      }

      handleSubmit = (e) => {
        e.preventDefault()
    
        const { optionOneText, optionTwoText} = this.state
        const { authedUserId } = this.props
        this.props.dispatch(handleAddNewQuestion(optionOneText, optionTwoText, authedUserId))
    
        this.setState(() => ({
            optionOneText: '',
            optionTwoText: ''
        }))
      }

    render() {
        return (
            <div class="container">
                <div>
                    <h2>Would You Rather</h2>
                </div>
                <form action="action_page.php" onSubmit={this.handleSubmit}>
                    <label for="fname">Option one</label>
                    <textarea
                        placeholder="Enter Option one text here"
                        value={this.state.optionOneText}
                        onChange={this.handleOptionOneChange}
                        className='textarea'
                        maxLength={280}
                    />

                    <label for="lname">Option two</label>
                    <textarea
                        placeholder="Enter Option two text here"
                        value={this.state.optionTwoText}
                        onChange={this.handleOptionTwoChange}
                        className='textarea'
                        maxLength={280}
                    />

                    <input type="submit" value="Submit"/>

                </form>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser}) {

    return {
        authedUserId: authedUser
    }
}

export default connect(mapStateToProps)(CreateQuestion)
