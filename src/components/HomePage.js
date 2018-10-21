import React, { Component } from 'react'
import { connect } from 'react-redux'

class HomePage extends Component {
    render() {
        console.log('HomePage render');
        console.log(this.props.authedUser);
        return (
            <div>
                I'm HomePage
                <div>
                    {this.props.authedUser}
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
        authedUser
    }
  }
  
export default connect(mapStateToProps)(HomePage)
