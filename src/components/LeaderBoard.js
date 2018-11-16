import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getLeaderBoardDataArr } from '../utils/helpers'

class LeaderBoard extends Component {

    render() {
        return (
            <div>
                <h3> The Leader Board</h3>
                <ol>
                    {this.props.leaderBoardDataArr.map((dataObj, index) =>
                        <li className="blockLeaderBoard" key={index}>
                            <tr>
                                Name: {dataObj.name} 
                            </tr>
                            <tr>
                                <img
                                    src={dataObj.pictureUrl}
                                    alt={`Avatar of ${dataObj.name}`}
                                    className='avatar'
                                />
                                <td>
                                    <span className="textarea">Score: {dataObj.score}</span>.
                                </td>
                            </tr>
                            <tr>
                                Asked: {dataObj.numQuestionsAsked}
                            </tr>
                            <tr>
                                Answered: {dataObj.numQuestionsAnswered}
                            </tr>
                        </li>
                    )}
                </ol>
            </div>
        )
    }
}


function mapStateToProps ({ users}) {
    return {
        users,
        leaderBoardDataArr: getLeaderBoardDataArr(users)
    }
  }
  
export default connect(mapStateToProps)(LeaderBoard)