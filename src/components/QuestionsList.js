import React, {Component}  from 'react'
import PropTypes from 'prop-types'
import Dropdown from 'react-dropdown'


const isShowAnsweredDropDown = [
    {label: 'Unanswered questions list', value: 'Unanswered'},
    {label: 'Answered questions list', value: 'Answered'}
];

class QuestionsList extends Component {

    state = {
        isShowAnswered : 'Unanswered'
    }

    constructor() {
        super();
        this.onSelectIsShowAnswered = this.onSelectIsShowAnswered.bind(this);
    }

    onSelectIsShowAnswered = (selectObj) => {
        this.setState({
            isShowAnswered: selectObj.value
        })
    }

    render() {
        const questionsArr = Object.values(this.props.questions || {});
        console.log('QuestionsList questionsArr')
        console.log(questionsArr)
        return (
            <div>
                <div>
                     <Dropdown options={isShowAnsweredDropDown} onChange={this.onSelectIsShowAnswered}
                                                    value={this.state.isShowAnswered} placeholder="Select To Show" />
                </div>
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
            </div>
        )
    }
}

QuestionsList.propTypes = {
    questions: PropTypes.object.isRequired
  };

export default QuestionsList
