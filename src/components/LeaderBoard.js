import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getLeaderBoardDataArr } from '../utils/helpers'

class LeaderBoard extends Component {

    render() {
        return (
            <div>
                <h1> The Leader Board !</h1>
                <table>
                    {this.props.leaderBoardDataArr.map(dataObj =>
                        <p>
                            <tr>
                               Name: {dataObj.name}
                            </tr>
                            <tr>
                                <img
                                    src={dataObj.pictureUrl}
                                    alt={`Avatar of ${dataObj.name}`}
                                    className='avatar'
                                />
                            </tr>
                            <tr>
                                Asked: {dataObj.numQuestionsAsked}
                            </tr>
                            <tr>
                                Asked: {dataObj.numQuestionsAnswered}
                            </tr>
                        </p>
                    )}
                </table>
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