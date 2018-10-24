import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

class HomePage extends Component {
    render() {
        console.log('HomePage render props');
        console.log(this.props);
        return (
            <div>
                <div>
                   <h1> Hello {this.props.authedUser} </h1>
                </div>
                <Nav />
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
