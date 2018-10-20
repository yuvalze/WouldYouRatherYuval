import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import SignIn from './SignIn'
import HomePage from './HomePage'

class App extends Component {

  state = {
    authedUser: undefined
  };

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  onUserLogIn(userId) {
    this.setState(
      {authedUser: userId}
    )
  }

  render() {
    console.log('App render users');
    console.log(this.props.users);
    console.log('App render loading');
    console.log(this.props.loading);
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