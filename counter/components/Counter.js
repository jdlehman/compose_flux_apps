import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  static contextTypes = {
    completeAll: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired
  };

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <div style={{border: '1px solid red'}}>
        <h2>Counter App</h2>
        <p>
          Clicked: {counter} times
          {' '}
          <button onClick={increment}>+</button>
          {' '}
          <button onClick={decrement}>-</button>
          {' '}
          <button onClick={incrementIfOdd}>Increment if odd</button>
          {' '}
          <button onClick={() => incrementAsync()}>Increment async</button>
          {' '}
          <button onClick={() => this.context.completeAll()}>Mark Todos as Completed</button>
          {' '}
          <button onClick={() => this.context.clearCompleted()}>Clear Completed Todos</button>
        </p>
      </div>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;
