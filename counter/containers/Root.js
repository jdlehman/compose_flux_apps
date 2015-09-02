import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import * as CounterActions from '../actions/counter';
import CounterApp from './CounterApp';
import configureStore from '../store/configureStore';
import { BehaviorSubject } from 'rx';

function createStoreStream(store) {
  var subject = new BehaviorSubject(store.getState());
  store.subscribe(() => subject.onNext(store.getState()));
  return subject;
}

const store = configureStore();
const actions = bindActionCreators(CounterActions, store.dispatch);
export const increment = actions.increment;
export const decrement = actions.decrement;
export const storeStream = createStoreStream(store);

export default class Root extends Component {
  static childContextTypes = {
    completeAll: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired
  };

  getChildContext() {
    return {
      completeAll: this.props.completeAll,
      clearCompleted: this.props.clearCompleted
    };
  }

  render() {
    return (
      <Provider store={store}>
        {() => <CounterApp />}
      </Provider>
    );
  }
}
