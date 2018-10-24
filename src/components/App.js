import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import SignIn from './SignIn'
import Logout from './Logout'
import HomePage from './HomePage'
import Leaderboard from './LeaderBoard'
import { setAuthedUser } from '../actions/authedUser'
import CheckAuthUser from '../route/CheckAuthUser'

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
      <BrowserRouter>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            {this.props.loading === true
              ? null :
                <div>
                  <Switch>
                    <Route path='/' exact render={({ history }) => (
                      <SignIn
                        users={this.props.users[0]}
                        onUserLogIn={(userId) => {
                        this.onUserLogIn(userId)
                        history.push('/homePage')
                        }}
                      />
                    )}/>
                    <CheckAuthUser path="/homePage" authUser={this.props.authedUser} component={HomePage} />  
                    <CheckAuthUser path="/leaderboard" authUser={this.props.authedUser} component={Leaderboard} />                    
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
                    <Redirect to='/'/>
                  </Switch>
                </div>
            }
          </div>
        </Fragment>
      </BrowserRouter>
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