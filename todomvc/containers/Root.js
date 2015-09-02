import 'babel-core/polyfill';
import React, { PropTypes, Component } from 'react';
import TodoApp from './TodoApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';

import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/todos';

const store = createStore(rootReducer);
const actions = bindActionCreators(TodoActions, store.dispatch);
export const completeAll = actions.completeAll;
export const clearCompleted = actions.clearCompleted;

export default class Root extends Component {
  static childContextTypes = {
    counterStateStream: PropTypes.object.isRequired
  };

  getChildContext() {
    return {counterStateStream: this.props.counterStateStream};
  }

  render() {
    return (
      <Provider store={store}>
        {() => <TodoApp /> }
      </Provider>
    );
  }
}
