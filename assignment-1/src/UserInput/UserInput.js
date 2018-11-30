import React from 'react';
import './UserInput.css';

const UserInput = ({ name, onNameChanged }) => (
    <div class="UserInput">
        <label>
            <input placeholder="Write user name here" type="text" value={ name } onInput={ (event) => onNameChanged(event.target.value) }/>
        </label>
    </div>
);

export default UserInput;