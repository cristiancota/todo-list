import React from 'react';

export default function (props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="text" onChange={props.onChange} value={props.newItem} />
      <button type="submit">Add</button>
    </form>
  );
}
