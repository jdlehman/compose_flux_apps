import React, { PropTypes, Component } from 'react';
import TodoApp from './TodoApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';

import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/todos';

const store = createStore(rootReducer);

export default class Root extends Component {
  static childContextTypes = {
    registry: PropTypes.object.isRequired
  };

  getChildContext() {
    return {registry: this.props.registry};
  }

  componentWillMount() {
    var actions = bindActionCreators(TodoActions, store.dispatch);
    var register = {
      getState: store.getState,
      subscribe: store.subscribe,
      actions: {
        completeAll: actions.completeAll,
        clearCompleted: actions.clearCompleted
      }
    };
    this.props.registry[this.props.registerName] = register;
  }

  render() {
    return (
      <Provider store={store}>
        {() => <TodoApp /> }
      </Provider>
    );
  }
}
