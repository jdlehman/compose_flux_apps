import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';

class TodoApp extends Component {
  static contextTypes = {
    registry: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props);

    this.state = {
      counterVal: context.registry.counter.getState().counter
    };
  }

  componentDidMount() {
    const { registry } = this.context;
    this.unsubscribe = registry.counter.subscribe(() => {
      this.setState({
        counterVal: registry.counter.getState().counter
      });
    });
  }

  componentDidUnmount() {
    this.unsubscribe();
  }

  render() {
    const { todos, dispatch } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);

    return (
      <div style={{border: '1px solid blue'}}>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
        <div>
          Counter State: {this.state.counterVal}
        </div>
      </div>
    );
  }
}

TodoApp.propTypes = {
  todos: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function select(state) {
  return {
    todos: state.todos
  };
}

export default connect(select)(TodoApp);
