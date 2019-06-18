import React, { Component } from 'react'
import { Link } from '../react-router-dom';
class UserList extends Component {
    render() {
        return (<div>
            <Link to="/user/detail/1">用户一</Link><br />
            <Link to="/user/detail/2">用户二</Link><br />   
            <Link to="/user/detail/2">用户三</Link>
        </div>)
    }
}

export default UserList;