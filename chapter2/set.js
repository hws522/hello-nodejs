"use strict";

const test = new Set();

test.add(1); // add 를 이용하여 데이터를 입력받는다.
test.add(1);
test.add(2);
test.add(2);
test.add(3);

for (const item of test) {
  // for-of 문을 이용하여 내부를 순회한다.
  console.log(item);
}

// 1
// 2
// 3

const ret = test.has(2);
console.log(ret);

// true
