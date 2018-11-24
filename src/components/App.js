import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import SignIn from './SignIn'
import QuestionsList from './QuestionsList'
import Leaderboard from './LeaderBoard'
import CreateQuestion from './CreateQuestion'
import Poll from './Poll'
import { setAuthedUser } from '../actions/authedUser'
import NotFound from './NotFound'
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
            ? null 
            : <div>
                  {this.props.authedUser
                  ? <div>
                      <div className='displayUserNameAndTitle'>
                          <h1> Hello {this.getUserName()}&nbsp;&nbsp;&nbsp;</h1>
                          <Nav />
                          <button className='btnLogout' onClick={this.onUserLogOut}>
                            Logout
                          </button>
                      </div> 
                      <Switch>
                        <Route path='/questions/:question_id' component={Poll} />
                        <Route exact path='/' component={QuestionsList} />  
                        <Route path='/leaderboard' component={Leaderboard} />   
                        <Route path='/add' component={CreateQuestion} />                 
                        <Route component={NotFound}/>
                      </Switch>
                    </div> 
                  : <SignIn
                      onUserLogIn={(userId) => {
                      this.onUserLogIn(userId)
                      }}
                    />
                  }  
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