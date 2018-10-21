import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import SignIn from './SignIn'
import HomePage from './HomePage'
import { setAuthedUser } from '../actions/authedUser'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  onUserLogIn(userId) {
    this.props.dispatch(setAuthedUser(userId))
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact render={({ history }) => (
                    <SignIn
                      users={this.props.users[0]}
                      onUserLogIn={(userId) => {
                      this.onUserLogIn(userId)
                      history.push('/homePage')
                      }}
                    />
                  )}/>  
                  <Route path='/homePage' component={HomePage} />  
                </div>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    loading: (users === null || users === undefined || users[0] === undefined),
    users
  }
}

export default connect(mapStateToProps)(App)