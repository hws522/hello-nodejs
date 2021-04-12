"use strict";

function say(word) {
  console.log(word);
}

say("hi");

// 선언 후 실행하는 일반적인 방법

say("hi");

function say(word) {
  console.log(word);
}
// 함수를 작성하기전 먼저 호출하였지만 여전히 실행 된다. 호이스팅의 특징이다.
