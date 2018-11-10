import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import SignIn from './SignIn'
import Logout from './Logout'
import QuestionsList from './QuestionsList'
import Leaderboard from './LeaderBoard'
import CreateQuestion from './CreateQuestion'
import Poll from './Poll'
import { setAuthedUser } from '../actions/authedUser'
import CheckAuthUser from '../route/CheckAuthUser'
import Nav from './Nav'

class App extends Component {

  constructor() {
    super();
    this.onUserLogIn = this.onUserLogIn.bind(this);
    this.onUserLogOut = this.onUserLogOut.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  onUserLogIn(userId) {
    this.props.dispatch(setAuthedUser(userId))
  }

  onUserLogOut() {
    this.props.dispatch(setAuthedUser(null));
  }

  getUserName() {
    return this.props.users[this.props.authedUser].name;
  }  

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            {this.props.loading === true
              ? null :
                <div>
                 {this.props.authedUser && 
                  <Fragment>
                      <div>
                        <h1> Hello {this.getUserName()} </h1>
                      </div>
                      <Nav />
                    </Fragment> 
                 }
                  <Switch>
                    <Route path='/' exact render={({ history }) => (
                      <SignIn
                        onUserLogIn={(userId) => {
                        this.onUserLogIn(userId)
                        history.push('/homePage')
                        }}
                      />
                    )}/>
                    <CheckAuthUser path='/questions/:question_id' authUser={this.props.authedUser} component={Poll} />
                    <CheckAuthUser path="/homePage" authUser={this.props.authedUser} component={QuestionsList} />  
                    <CheckAuthUser path="/leaderboard" authUser={this.props.authedUser} component={Leaderboard} />   
                    <CheckAuthUser path="/add" authUser={this.props.authedUser} component={CreateQuestion} />                 
                    <Route path='/logout' render={({ history }) => (
                      <Logout
                          onUserLogOut={this.onUserLogOut}
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
    loading: (users === null || users === undefined),
      users,
      authedUser
  }
}

export default connect(mapStateToProps)(App)