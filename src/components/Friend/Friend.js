import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const{name, username, id} = props.friend;
    const navigate = useNavigate()
    const showFriendDetails = () =>{

        navigate('/friend/'+id)
    }
    return (
        <div>
            <h3>Name: {name}</h3>
            <Link to={'/friend/'+id}>Show details</Link>
            <button onClick={showFriendDetails}>{username}</button>
        </div>
    );
};

export default Friend;