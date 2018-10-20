import React, { Component} from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import PropTypes from 'prop-types';


class SignIn extends Component {

    onSelect(value) {
        console.log('onSelect' + value);
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
            <div>
                <Dropdown options={usersOptionsDropDown} onChange={this.usersOptionsDropDown} value={userDefaultOption} placeholder="Select an option" />
            </div>
        )
    }
}

SignIn.propTypes = {
    users: PropTypes.object.isRequired
  };

export default SignIn


