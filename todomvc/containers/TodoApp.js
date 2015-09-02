import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';

class TodoApp extends Component {
  static contextTypes = {
    counterStateStream: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props);

    this.state = {
      counterVal: context.counterStateStream.getValue().counter
    };
  }

  componentDidMount() {
    this.context.counterStateStream.filter(x => x.counter % 2 === 0).subscribe((state) => {
      this.setState({
        counterVal: state.counter
      });
    });
  }

  componentDidUnmount() {
    this.context.registry.dispose();
  }

  render() {
    const { todos, dispatch } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);

    return (
      <div style={{border: '1px solid blue'}}>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
        <div>
          Even Counter State: {this.state.counterVal}
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
