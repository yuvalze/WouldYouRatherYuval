import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import SignIn from './SignIn'
import Logout from './Logout'
import HomePage from './HomePage'
import { setAuthedUser } from '../actions/authedUser'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  onUserLogIn(userId) {
    this.props.dispatch(setAuthedUser(userId))
  }

  onUserLogOut() {
    this.props.dispatch(setAuthedUser(undefined));
  }

  render() {
    console.log('App render');
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            {this.props.loading === true
              ? null :
                <div>
                  <Route path='/' exact render={({ history }) => (
                    <SignIn
                      users={this.props.users[0]}
                      onUserLogIn={(userId) => {
                      this.onUserLogIn(userId)
                      history.push('/homePage')
                      }}
                    />
                  )}/>
                  <Route path='/homePage' render={() => (
                      !this.props.authedUser ? (
                          <Redirect to='/'/>
                      ) : (
                          <HomePage/>
                      )
                  )}/>
                  <Route path='/logout' render={({ history }) => (
                    <Logout
                        users={this.props.users[0]}
                        onUserLogOut={()=> this.onUserLogOut}
                        onUserLogIn={(userId) => {
                            this.onUserLogIn(userId)
                            history.push('/homePage')
                        }}
                    />
                  )}/>
                </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    loading: (users === null || users === undefined || users[0] === undefined),
      users,
      authedUser
  }
}

export default connect(mapStateToProps)(App)