import React, {Component} from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {

    render() {
        const usersValueArr = Object.values(this.props.users); 
        return (
            <div>
                <h1> The Leader Board !</h1>
                <table>
                    {usersValueArr.map(userObj =>
                        <tr>
                            {userObj.name}
                        </tr>
                        )
                    }
                </table>
            </div>
        )
    }
}


function mapStateToProps ({ users}) {
    return {
        users
    }
  }
  
export default connect(mapStateToProps)(LeaderBoard)