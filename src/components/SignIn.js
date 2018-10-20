import React, { Component} from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import PropTypes from 'prop-types';


class SignIn extends Component {

    state = {
        selectedUser : undefined
    }
    onSelectUser(value) {
        this.setState(() => ({
            selectedUser: value
          }))
    }

    render() {
        console.log('SignIn render users props');
        console.log(this.props.users);

        const usersOptionsArr = Object.values(this.props.users);

        console.log('SignIn render users arr');
        console.log(usersOptionsArr);
 
        const usersOptionsDropDown = usersOptionsArr.map (userObj => { 
            return {value: userObj.id, label: userObj.name}
        });   
        
        console.log('SignIn render usersOptionsDropDown');
        console.log(usersOptionsDropDown);

        const userDefaultOption = usersOptionsDropDown[0];

        return(
            <div className='create-contact-form'>
                <Dropdown options={usersOptionsDropDown} onChange={() => this.onSelectUser}
                                                 value={this.state.selectedUser} placeholder="Select a user" />
                <button className='heart-button' onClick={() => this.props.onUserLogIn(this.state.selectedUser)}>
                    Sign In
                </button>
            </div>
        )
    }
}

SignIn.propTypes = {
    users: PropTypes.object.isRequired,
    onUserLogIn:  PropTypes.func.isRequired
  };

export default SignIn


