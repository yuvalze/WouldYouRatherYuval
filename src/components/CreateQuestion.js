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

      handleOptionChange = (e, optionTypeStr) => {
        const optionValue = e.target.value
    
        this.setState(() => ({
            [optionTypeStr] : optionValue
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
            return <Redirect to='/' />
          }

        return (
            <div className="container">
                <div>
                    <h2>Would You Rather</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Option one</label>
                        <textarea 
                            placeholder="Enter Option one text here"
                            value={this.state.optionOneText}
                            onChange={e => this.handleOptionChange(e, 'optionOneText')}
                            className='textarea'
                            maxLength={280}
                        />
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <label>Option two</label>
                        <textarea 
                            placeholder="Enter Option two text here"
                            value={this.state.optionTwoText}
                            onChange={e => this.handleOptionChange(e, 'optionTwoText')}
                            className='textarea'
                            maxLength={280}
                        />
                    </div>
                    <div>&nbsp;</div>
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
