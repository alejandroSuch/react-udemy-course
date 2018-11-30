import React from 'react';
import './Person.css';

const paintChildren = children => (children ? <p>{children}</p> : null);

const person = ({ name, age, children, click, changed }) => (
  <div className="Person">
    <p onClick={() => click(name)}>
      I'm {name} and I am {age} years old
    </p>
    {paintChildren(children)}
    <input type="text" value={name} onChange={event => changed({ oldName: name, newName: event.target.value })} />
  </div>
);
export default person;
