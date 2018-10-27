import React, { Component} from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import PropTypes from 'prop-types';


class SignIn extends Component {

    state = {
        selectedUser : undefined
    }


    onSelectUser = (UserObj) => {
        if (UserObj &&  UserObj.value) {
            this.setState(() => ({
                selectedUser: UserObj.value
            }))
        }
      }

    onUserLogin = () => {
        if (this.state.selectedUser) {
            this.props.onUserLogIn(this.state.selectedUser);
        }
    }

    render() {
        const usersOptionsArr = Object.values(this.props.users);
        const usersOptionsDropDown = usersOptionsArr.map (userObj => { 
            return {value: userObj.id, label: userObj.name}
        });   
        
        return(
            <div>
                <h3 className='center'>Select User from drop down and press 'Sign In'</h3>
                <div className='tweet-icons'>
                    <Dropdown options={usersOptionsDropDown} onChange={this.onSelectUser}
                                                    value={this.state.selectedUser} placeholder="Select a user" />
                    <button className='btn' onClick={this.onUserLogin}>
                        Sign In
                    </button>
                </div>
            </div>
        )
    }
}

SignIn.propTypes = {
    users: PropTypes.object.isRequired,
    onUserLogIn:  PropTypes.func.isRequired
  };

export default SignIn


