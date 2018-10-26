import React, {Component}  from 'react'
import PropTypes from 'prop-types'

class UnAnsweredList extends Component {

    render() {
        const questionsArr = Object.values(this.props.questions || {});
        console.log('UnAnsweredList questionsArr')
        console.log(questionsArr)
        return (
            <div>
                <ul>
                    {questionsArr.map((question) => (
                        <li key={question.id}>
                            <div>
                                <div> {question.author} ask:</div>
                                <div> {question.optionOne.text} </div>
                                <div> or </div>
                                <div> {question.optionTwo.text} </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

UnAnsweredList.propTypes = {
    questions: PropTypes.object.isRequired
  };

export default UnAnsweredList
