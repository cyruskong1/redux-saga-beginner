import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import Counter from "./Counter";
import reducer from "./reducers";
import rootSaga from "./sagas";

// create saga middleware
const sagaMiddleware = createSagaMiddleware();
// add saga middleware to redux store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
// run saga middleware
sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({ type });

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrementAsync={() => action("INCREMENT_ASYNC")}
      onIncrement={() => action("INCREMENT")}
      onDecrement={() => action("DECREMENT")}
    />,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
