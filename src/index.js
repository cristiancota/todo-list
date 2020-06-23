import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './TodoItem.js';
import TodoForm from './TodoForm';
import Counter from './Counter';

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
    if (this.state.newItem.length === 0) return;
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

  handleRemoveComplete = () => {
    let items = this.state.items;
    items = items.filter((item) => {
      return !item.done;
    });
    this.setState({ items });
  };

  render() {
    return (
      <div className="todo-container">
        <h2>todo list</h2>
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
        <TodoForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          newItem={this.state.newItem}
          checkAll={this.checkAll}
        />
        <div className="button-group">
          <button onClick={this.checkAll}>Check All</button>
          {this.state.items.some((item) => item.done) ? (
            <button onClick={this.handleRemoveComplete}>Clear done</button>
          ) : null}
        </div>
        {this.state.items.length > 0 ? (
          <Counter items={this.state.items} />
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<Todo />, document.getElementById('root'));
