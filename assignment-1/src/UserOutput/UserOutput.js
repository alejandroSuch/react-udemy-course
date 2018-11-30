import React from 'react';
import './UserOutput.css';

const UserOutput = ({ name }) => (
    <div className="UserOutput">
        <p>Here I am!</p>
        <p>My name is { name }</p>
    </div>
);

export default UserOutput;