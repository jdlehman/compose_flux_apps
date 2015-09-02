import React, { PropTypes, Component } from 'react';
import { Provider } from 'react-redux';
import CounterApp from './CounterApp';
import configureStore from '../store/configureStore';

import { bindActionCreators } from 'redux';
import * as CounterActions from '../actions/counter';

const store = configureStore();

export default class Root extends Component {
  static childContextTypes = {
    registry: PropTypes.object.isRequired
  };

  getChildContext() {
    return {registry: this.props.registry};
  }

  componentWillMount() {
    var actions = bindActionCreators(CounterActions, store.dispatch);
    var register = {
      getState: store.getState,
      subscribe: store.subscribe,
      actions: {
        increment: actions.increment,
        decrement: actions.decrement
      }
    };
    this.props.registry[this.props.registerName] = register;
  }

  render() {
    return (
      <Provider store={store}>
        {() => <CounterApp />}
      </Provider>
    );
  }
}
