import React from 'react';
import {Subject} from 'rx';
import Counter, {
  storeStream as counterStoreStream,
  increment,
  decrement
} from 'counter';
import Todo, {
  completeAll,
  clearCompleted
} from 'todomvc';

var actionObserver = new Subject();
actionObserver.subscribe((action) => {
  action();
});

function unidirectionalAction(action) {
  return (...args) => {
    actionObserver.onNext(() => {
      action(...args);
    });
  }
}

React.initializeTouchEvents(true);
React.render(
  <div>
    <Counter
      completeAll={unidirectionalAction(completeAll)}
      clearCompleted={unidirectionalAction(clearCompleted)} />
    <Todo
      counterStateStream={counterStoreStream}
      increment={unidirectionalAction(increment)}
      decrement={unidirectionalAction(decrement)}
      />
  </div>
  , document.body);
