import test from "tape";

import { incrementAsync, delay } from "./sagas";
import { put, call } from "redux-saga/effects";

test("IncrementAsync Saga Test", assert => {
  const gen = incrementAsync();

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    "incrementAsync should call delay(1000)"
  );

  assert.deepEqual(
    gen.next().value,
    put({ type: "INCREMENT" }),
    "incrementAsync should dispatch action of type INCREMENT"
  );

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    "incrementAsync should finish"
  );

  assert.end();
});
