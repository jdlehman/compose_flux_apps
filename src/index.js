import React from 'react';
import Counter from 'counter';
import Todo from 'todomvc';

var registry = {};

React.initializeTouchEvents(true);
React.render(
  <div>
    <Counter registry={registry} registerName="counter" />
    <Todo registry={registry} registerName="todo" />
  </div>
  , document.body);
