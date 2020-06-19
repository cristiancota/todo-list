import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './TodoItem.js';

class Todo extends React.Component {
  state = {
    items: [],
    newItem: ''
  };

  handleChange = (event) => {
    this.setState({ newItem: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.newItem.length == 0) return;
    let items = [...this.state.items];
    items.push({ name: this.state.newItem, done: false });
    this.setState({ items, newItem: '' });
  };

  handleCheck = (i) => {
    let items = [...this.state.items];
    items[i].done = !items[i].done;
    this.setState({ items });
  };

  checkAll = () => {
    let items = this.state.items;
    items.forEach((item) => {
      item.done = true;
    });
    this.setState({ items });
  };

  render() {
    return (
      <div>
        <h1>todo list</h1>
        <ul className="todo-list">
          {this.state.items.map((element, i) => {
            return (
              <TodoItem
                key={i}
                index={i}
                element={element}
                handleCheck={this.handleCheck}
                itemName={`todo-item-${i}`}
              />
            );
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.newItem}
          />
          <button type="submit">enter</button>
          <button onClick={this.checkAll}>check all</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Todo />, document.getElementById('root'));
