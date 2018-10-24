import React, { Component} from 'react'
import 'react-dropdown/style.css'
import PropTypes from 'prop-types';
import SignIn from './SignIn'


class Logout extends Component {

    componentDidMount() {
        console.log('Logout componentDidMount');
        this.props.onUserLogOut();
    }

    render() {
        return(
            <SignIn
                users={this.props.users}
                onUserLogIn={this.props.onUserLogIn}
            />
        )
    }
}

Logout.propTypes = {
    users: PropTypes.object.isRequired,
    onUserLogIn: PropTypes.func.isRequired,
    onUserLogOut: PropTypes.func.isRequired
};

export default Logout


