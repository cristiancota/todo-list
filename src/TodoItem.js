import React from 'react';

export default function (props) {
  return (
    <li className={props.element.done ? 'done-item todo-item' : 'todo-item'}>
      <input
        type="checkbox"
        checked={props.element.done}
        onChange={() => props.handleCheck(props.index)}
        id={props.itemName}
      />
      <label htmlFor={props.itemName}>{props.element.name}</label>
    </li>
  );
}
