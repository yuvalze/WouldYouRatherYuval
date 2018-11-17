import React, { Component} from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'


class SignIn extends Component {

    state = {
        selectedUser : undefined
    }


    onSelectUser = (userObj) => {
        if (userObj &&  userObj.value) {
            this.setState(() => ({
                selectedUser: userObj.value
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
                    <Dropdown options={usersOptionsDropDown} onChange={this.onSelectUser}
                                                    value={this.state.selectedUser} placeholder="Select a user" />
                    <button disabled={this.state.selectedUser === undefined} className='btn' onClick={this.onUserLogin}>
                        Sign In
                    </button>
            </div>
        )
    }
}

SignIn.propTypes = {
    onUserLogIn:  PropTypes.func.isRequired
  };


function mapStateToProps ({users}) {
    return {
        users 
    }
  }
  
export default connect(mapStateToProps)(SignIn)


