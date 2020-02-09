import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './UserData.css';
import { userData } from '../../actions';
import UserDetails from './UserDetails';



const UserData = (props) => {

    const [data, setData] = useState(props.users);
    


    const createListItems = () => {
        return data.map(user => {
            
            return (
                <li
                    className='list-li'
                    key={user.id}
                    onClick={() => props.userData(user)}>
                    {user.first} 
                </li>
            );
        });
    }


    return (
        <div className='User-List'>
            <h4>User List:</h4>
            {createListItems()}
            <hr />
            <div className='bottom-user'>
                <div id='user-Details-div'>
                    <h4 id='Info-Text'>User Info:</h4>
                    <UserDetails />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    };
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ userData: userData }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserData);