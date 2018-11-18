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
                            <div>
                                Name: {dataObj.name}&nbsp;&nbsp;<span className="textarea">Score: {dataObj.score}</span>.
                            </div>                            
                            <img
                                src={dataObj.pictureUrl}
                                alt={`Avatar of ${dataObj.name}`}
                                className='avatar'
                            />
                            <div>
                                Asked: {dataObj.numQuestionsAsked}
                            </div>
                            <div>
                                Answered: {dataObj.numQuestionsAnswered}
                            </div>
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