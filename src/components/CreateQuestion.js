import React, {Component} from 'react'
import { handleAddNewQuestion } from '../actions/questions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class CreateQuestion extends Component {

    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false
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
            optionTwoText: '',
            toHome: true
        }))
      }

    render() {
        if (this.state.toHome === true) {
            return <Redirect to='/homePage' />
          }

        return (
            <div className="container">
                <div>
                    <h2>Would You Rather</h2>
                </div>
                <form action="action_page.php" onSubmit={this.handleSubmit}>
                    <label>Option one</label>
                    <textarea
                        placeholder="Enter Option one text here"
                        value={this.state.optionOneText}
                        onChange={this.handleOptionOneChange}
                        className='textarea'
                        maxLength={280}
                    />

                    <label>Option two</label>
                    <textarea
                        placeholder="Enter Option two text here"
                        value={this.state.optionTwoText}
                        onChange={this.handleOptionTwoChange}
                        className='textarea'
                        maxLength={280}
                    />

                    <input type="submit" disabled={ !this.state.optionOneText || !this.state.optionTwoText } value="Submit"/>

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
