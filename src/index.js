import React from 'react';
import Counter from 'counter';
import Todo from 'todomvc';

React.initializeTouchEvents(true);
React.render(
  <div>
    <Counter />
    <Todo />
  </div>
  , document.body);
