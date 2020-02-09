import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './UserData.css';
import { userData } from '../../actions';


const UserDetail = (props) => {
    return (
        <div className='Info'>
            <img src={props.user.thumbnail}></img>
            <div className='info-text'>
                <h2>Name: {props.user.first} {props.user.last}</h2>
                <h3>Age: {props.user.age}</h3>
                <h3>Description: {props.user.info}</h3>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        user: state.activeUser
    };
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ userData: userData }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);