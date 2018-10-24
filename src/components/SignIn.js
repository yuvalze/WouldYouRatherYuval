import React, { Component} from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import PropTypes from 'prop-types';


class SignIn extends Component {

    state = {
        selectedUser : undefined
    }


    onSelectUser = (UserObj) => {
        this.setState(() => ({
            selectedUser: UserObj.value
          }))
      }

    onUserLogin = () => {
        this.props.onUserLogIn(this.state.selectedUser);
    }

    render() {
        const usersOptionsArr = Object.values(this.props.users);
        const usersOptionsDropDown = usersOptionsArr.map (userObj => { 
            return {value: userObj.id, label: userObj.name}
        });   
        
        return(
            <div className='create-contact-form'>
                <Dropdown options={usersOptionsDropDown} onChange={this.onSelectUser}
                                                 value={this.state.selectedUser} placeholder="Select a user" />
                <button className='heart-button' onClick={this.onUserLogin}>
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


