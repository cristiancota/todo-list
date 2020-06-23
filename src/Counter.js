import React from 'react';

export default function (props) {
  return (
    <p className="counter">
      {props.items.reduce((a, b) => (a += b.done ? 1 : 0), 0)}/
      {props.items.length}
    </p>
  );
}
