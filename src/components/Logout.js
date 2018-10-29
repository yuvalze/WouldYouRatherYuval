import React, { Component} from 'react'
import 'react-dropdown/style.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import SignIn from './SignIn'


class Logout extends Component {

    componentDidMount() {
        console.log('Logout componentDidMount');
        this.props.onUserLogOut();
    }

    componentDidUpdate() {
        console.log('Logout componentDidUpdate');
        this.props.onUserLogOut();
    }

    render() {
        return(
            <SignIn
                onUserLogIn={this.props.onUserLogIn}
            />
        )
    }
}

Logout.propTypes = {
    onUserLogIn: PropTypes.func.isRequired,
    onUserLogOut: PropTypes.func.isRequired
};

function mapStateToProps ({users}) {
    return {
        users : users[0]
    }
  }
  
export default connect(mapStateToProps)(Logout)


