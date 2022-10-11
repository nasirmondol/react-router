import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, []);
    return (
        <div>
            <h2>This component is friend details: {friendId}</h2>
            <h4>Name: {friend.name}</h4>
            <h4>Email: {friend.email}</h4>
            <h4>Address: {friend.address?.city}</h4>
            <p>geo: {friend.address?.geo.lat}</p>
        </div>
    );
};

export default FriendDetails;