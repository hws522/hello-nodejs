# Node.JS - Fast campus

<br>

<br>

### **I/O 와 프로그래밍 패러다임**

---

<br>

**I/O**

Input, Output 을 말한다.

node.js에서 I/O 에 대해 어떻게 접근할 것인가에 대한 답을 2가지의 모델로 마련했다.

컴퓨팅 작업의 핵심은 사용자 데이터를 입력을 받고 원하는 결과를 출력하는 것이 핵심 모델이다.

그모델을 처리함에 있어서 네트워크 요청에 대한 대기시간이 필수적으로 발생하게 되므로, 요청들을 기다리지 않고 병렬적으로 동시에 수행할 수 있도록 고안되었다.

**비동기 vs 동기**

비동기 : 해당하는 데이터가 서로 일치하게 되는, 그 과정이 완료되는 시점까지 기다리지 않는다.

동기 : 어떠한 작업이 동기화된다라는 것은 하나와 또다른 하나의 데이터, 요청이 일치하게 되는 때를 기다린다. -> 성능적인 면에서 단점이 될 수 있다.

**Non-blocking vs blocking**

blocking : 해당하는 코드, 작업이 완료될 때까지 다른 작업을 하지 못하게 막는 것을 말한다.

Non-blocking : 어떠한 요청이나 작업이 이루어지는 과정중에 기다리지 않고 다른 작업을 같이 수행하거나 병렬적으로 수행하는 작업을 말한다. Node.js에서는 Non-blocking 모델을 사용한다. 기본적으로 javascript 언어의 특성이 non-blocking 이기 때문이다.

<br>

### `javascript 는 이벤트 주도방식의 개발 언어다.`

<br>

### **Node vs Browser**

---

<br>

back-end vs front-end 의 접근으로 보면 쉽다. 특징들이 몇가지 있는데 각 부분마다 다르게 사용해야하는 것들이 많다.

프론트엔드에서는 window 를 사용한다면, 백엔드에서는 브라우저가 없기 때문에 사용할 수 없다.

프론트엔드에서는 import를 통해 모듈를 가져왔다면, node.js 에서는 특별한 설정을 하지 않는 이상 require 를 사용하여 패키지를 정의한다.

<br>

### **REPL**

---

<br>

node.js 에서는 2가지의 코딩방법이 있다.

첫번째는 파일 내부에서 코딩하는 방법이고, 두번째는 실시간으로 채팅하듯이 코딩하는 방법이 있다. REPL은 이 중 두번째 방법이다.

windows 에서 REPL 을 사용하는 가장 좋은 방법은 파워쉘기반으로 하는 것이다.

REPL 은 어떠한 특정 객체에 대한 정보가 필요할 때 가장 많이 사용하고, 한줄 단위로 실행을 바로바로 해보고 싶을 때 주로 사용한다.

<br>

### **NPM**

---

<br>

npm 은 node.js 에서 사용되는 가장 기본적인 패키지 매니저다.

node.js 를 설치하면 자동으로 설치가 된다.

정상적으로 설치가 되었다면, `"npm -v"` 를 입력하면 확인 가능하다.

npm 커맨드 중 가장 많이 사용하는 명령어는 패키지 설치 명령어다.

`"npm install"` 혹은 `"npm i"` 후에 설치할 패키지를 입력하면 된다.

`"mkdir study"` 로 directory 하나를 만들고, 그 곳으로 이동하여 `"study npm init '패키지명'"` 을 사용하여 새로운 npm 패키지를 만들어 준다.

여기서 찾을 수 없다는 에러가 뜬다면 현재 생성하려는 패키지가 npm 레지스트리 안에 없기 때문에 나오는 에러다.

이러한 경우 `"npm install '패키지명' --save-dev"` 를 사용함으로써 package.json 안에 추가하여 다음번 패키지 설치 시, 자동으로 설치가 되도록 해준다.

`"npm install '패키지명' -g"` 을 이용하면 현재 프로젝트 폴더 뿐만 아니라 전역적으로 사용할 수 있다.

`"npx"` 명령어를 이용하면 설치보단 실행을 목적으로 한다.

`"npm uninstall '패키지명'"` 해당 패키지를 제거하는 명령어다.
-g 를 붙일 경우 글로벌패키지가 삭제 된다.

<br>

### **Semantic versioning**

---

<br>

Semantic versioning 은 npm 뿐만 아니라, node.js 에서도 똑같이 사용되는 버전관리 시스템이다.

쉽게 말해 체계적으로 버전을 관리하는 방법이다.

모든 versioning 이 그런 것은 아니나, semantic versioning 에서는 1.0.0 처럼 세자리로 각 자리마다 의미를 둔다.

- 시작은 1.0.0 으로 한다.

- 하위 버전과 호환이 되고 버그를 수정 했을 경우, 1.0.1 처럼 마지막 자리만 올린다.

- 하위 버전과 호환이 되고 새로운 기능이 추가가 될 경우, 1.1.0 처럼 두번째 자리를 올린다.

- 하위 호환이 유지되지 않고 중요한 변화가 생겼을 경우, 2.0.0 처럼 첫번째 자리를 올린다.

<br>

### **NPX**

---

<br>

사용되는 빈도가 많지는 않으나, 개발을 하거나 테스트용도로 적합하게 사용할 수 있으므로 알아둘 필요가 있다.

npx 는 npm 처럼 설치 후 실행하는 목적이 아니라, 설치하지않고 일회성으로 사용해보는, 테스트 목적으로 사용한다. 그래서 save, uninstall 옵션이 없다.

ex) `npx cowsay "hello"`

<br>

### **NODEMON**

---

<br>

nodemon 은 파일에 변화가 생기면 자동으로 변화를 감지하여 실행한다.

`"npm i nodemon -g"` 를 이용하여 nodemon 을 설치한다.

<br>

### **Module.exports**

---

<br>

module.exports 는 객체로 받을 수 있고, 단일로 받을 경우 함수나 클래스를 바로 외부로 export 할 수 있다.

```js
function edit() {}
function write() {}

module.exports = {
  edit,
  write,
};

class update {}

module.exports = write;
module.exports = update;
```

module.exports 는 단순히 함수를 외부를 호출하는 것 말고도 환경설정과 같은 외부 데이터를 접근 하기 위해 사용할 수 있다.

```js
module.exports = {
  id: "",
  token: "",
  fn: () => {
    console.log("this is a function");
  },
};
```

단일 파일로 모듈을 export 하게 된다면, 외부 환경변수와 같은 정보들을 config 파일로 엮어서 표현하기가 매우 좋다는 장점이 있다.

<br>

### **Event Loop**

---

<br>

기초 자료구조

**queue**

```js
// QUEUE - FIFO
const queue = [];
queue.push(1);
queue.push(2);
console.log(queue);
const q = queue.shift();
console.log(q);
```

```js
// STACK - LIFO
const stack = [];
stack.push(1);
stack.push(2);
console.log(stack);
const s = stack.pop();
console.log(s);
```

<br>

### **every**

---

<br>

특정한 배열에서 어떠한 조건에 대해 모두 만족할 경우를 체크할 때 사용한다.

```js
const arr = [2, 3, 4];

const t = arr.every((key) => key > 2);

console.log(t);

// false
```

every 는 백엔드 뿐만 아니라 프론트엔드 에서도 사용 할 수 있다. (페이지 렌더링 같은 작업 등 선택적인 코드 수행)

<br>

### **Find, Includes**

---

<br>

**Find** : 설정된 배열에 대해서 특정한 요소를 찾아서 반환 하는 것.

**Includes** : 특정한 문자열이나 배열에 대해 조건을 걸어서 그 조건을 만족하는 것이 있는지 true, false 로 반환 하는것.

```js
const arr = ["node.js", "올인원"];

const ret = arr.find((key) => key === "올인원");
console.log(ret);

// 올인원

const res = arr.includes("node.js");
console.log(res);

// true
```

`해당하는 값을 찾고 실제 데이터를 리턴하려면 find, 해당하는 값이 존재하는지만 확인하려면 includes.`

<br>

### **forEach**

---

<br>

현업에서 자주 사용하는 것들 중 하나다.

for 문과 크게 다르지 않지만 가독성 측면에서 좋은 방법이기 때문이다.

forEach 내부에서 실행되는 코드들은 비동기로 실행되지 않기 때문에, 비동기 코드들을 수행할 때 주의 하여야 한다.

```js
const arr = [1, 2, 3];
const newArr = [];

arr.forEach((item) => console.log(item));

// 1
// 2
// 3

arr.forEach((item) => {
  newArr.push(item);
});

console.log(newArr);

// [1, 2, 3]
```

<br>

### **Map, Filter**

---

<br>

**Map** : 배열 내의 모든 요소에 대하여 주어진 함수를 호출한 결과를 모아, 새로운 배열을 반환한다.

```js
const a = [1, 2, 3];
const b = a.map((x) => x + 1);
console.log(b);

// [2, 3, 4]
```

**Filter** : 주어진 함수의 테스트를 통과하는 모든 요소를 모아, 새로운 배열을 반환한다.

```js
const a = [1, 2, 3];
const f = a.filter((x) => x > 1);
console.log(f);

// [2, 3]
```

<br>

### **Object.assign vs Spread**

---

<br>

**Object.assign** : 말 그대로 할당이라는 의미이다.

```js
const obj = {
  title: "node.js 올인원",
};

const newObj = {
  name: "node.js 온라인",
};

const ret = Object.assign({}, obj, newObj);
console.log(ret);

// {title: 'node.js 올인원', name: 'node.js 온라인'}
```

**spread** : Object.assign 대신 spread 를 사용하는 이유는 가독성측면에서 더 좋기 때문이다.

`...` 뒤에 합칠 object들을 적어주면 된다.

```js
const obj = {
  title: "node.js 올인원",
};

const newObj = {
  name: "node.js 온라인",
};

const ret = {
  // 새로운 객체 생성이기 때문에 {} 형식이다.
  ...obj,
  ...newObj,
};

console.log(ret);

// {title: 'node.js 올인원', name: 'node.js 온라인'}
```

spread 연산자의 특징은 객체뿐만 아니라 배열에서도 사용가능하다는 점이다.

```js
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const ret = [...arr, ...arr2]; //새로운 배열 생성이기 때문에 [] 형식이다.
console.log(ret);

// [1, 2, 3, 4, 5, 6]
```

<br>

### **Set**

---

<br>

**Set** : 우리는 개발을 하다보면, 방대한 자료들 중 중복되지 않는 데이터만을 수집하고 싶을 때가 있다. set 이라는 내장된 자료구조를 이용하면 쉽게 구현할 수 있다.

```js
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
```

이렇게 중복되지 않고 입력되는지 확인할 때 사용하는 만큼, 실제로 Set 자료구조 안에 데이터가 존재하는지에 대한 조건의 메소드도 존재한다.

그 메소드가 `has` 다.

```js
const ret = test.has(2);
console.log(ret);

// true
```

<br>

### **Some**

---

<br>

**some** : every 와의 차이점은, some 은 최소 한가지 이상의 조건을 만족할 때 true 를 반환한다는 점이다.

```js
const arr = [2, 1, 0, -1, -2];

const res = arr.some((key) => key < 0);
console.log(res);

// true
```

<br>

### **Template String**

---

<br>

ES6 이전 template string 이 없었을 때 다수의 라인을 입력하거나, 문자내에 변수를 입력할 때 + 와 같은 다른 기호를 사용하여 문자열을 조정했다. Template string 을 이용하면 하나의 문자열 내에서 변수, 상수, 기존의 데이터를 통합하여 표현이 가능하다.

```js
const details = "자세한 내용";

let str = "node.js";
str += `올인원` + `기존 방법`; // 기존

str += `올인원 ${details}`; // template string

const int = 1;

str += `${str}의 값은 ${int}`;
```

사용자체는 간단하지만 매우 많이 사용된다.

<br>

### **String**

---

<br>

template string 과의 기본적인 차이는 template string 은 문자열 뿐만 아니라 상수, 변수, 데이터까지 조작가능한 반면 string 은 단순한 문자열에 대한 메소드와 객체, 여러 기능을 포함하고 있다.

string 은 별도로 선언하지 않아도 된다.

실제로 사용되는 데이터가 변할것인지, 일관성있게 사용될 것인지만 고려하면 된다.

데이터를 선언하는 방법에는 const, let 이 있기 때문이다.

```js
let string = "node.js 올인원 패키지";

let isStartWith = string.startsWith("n"); // 문자열 시작단어가 'n' 인지.

let isIncludes = string.includes("올인원"); // 문자열안에 '올인원' 이 포함되는지.

let isEndWith = string.endsWith("지"); // 문자열 끝단어에 '지' 인지

const checkIfContains = () => {
  if (isStartWith && isIncludes && isEndWith) {
    return true;
  }
};

const ret = checkIfContains();
console.log(ret);
```

<br>

### **Type Checking**

---

<br>

자바스크립트에선 변수나 상수를 선언할 때, 타입에 대해선 정의하지 않는다.

하지만 타입에 대해서 확인을 하거나 데이터를 변환할 경우에 이전 데이터의 값을 정확히 예상하기 위해 타입의 원래 속성을 확인해야 할 필요가 있다.

내장된 typeof 메소드를 이용하면 손쉽게 구현할 수 있다.

```js
const string = "node.js";
const array = [];
const obj = {};
const number = 1;

console.log(typeof string);
console.log(typeof array);
console.log(typeof obj);
console.log(typeof number);
```

<br>

### **Hoisting**

---

<br>

hoisting 은 자바스크립트에서 생성 및 실행단계가 어떻게 동작하는가에 대한 일반적인 생각이다.

```js
function say(word) {
  console.log(word);
}

say("hi");
```

일반적으로 함수를 선언 후에 실행하지만, 자바스크립트에서는 변수 및 함수선언이 컴파일단계에서 메모리에 저장되므로 함수선언전에 실행을 해도 문제없이 실행된다.

```js
say("hi");

function say(word) {
  console.log(word);
}
```

<br>

### **IIFE**

---

<br>

즉시 실행 함수 표현이라는 뜻이다.

말 그대로 정의되자마자 즉시 실행되는 자바스크립트함수를 말한다.

이렇게 괄호안에 둘러싸인 익명함수는 전역스코프에 불필요한 변수를 추가해서 오염시키는 것을 방지할 수 있을 뿐 아니라, IIFE 내부 안으로 다른 변수들이 접근하는 것을 막을 수 있는 방법이다.

```js
(function () {
  // 이처럼 이름이 없는 함수를 익명함수라 한다.
  var lang = "js";
})();

console.log(lang); // 외부에서 접근이 불가능하므로 오류가 발생한다.
```

```js
var r = (function () {
  var lang = "js";
  return lang;
})();

console.log(r);
// 이렇게 IIFE 가 변수에 할당된다면, IIFE는 저장되지 않고 함수가 실행된 결과만을 저장한다.

// 실행결과 : js
```

<br>

### **setInterval**

---

setInterval 은 함수를 특정간격으로 실행하도록 설정하는 역할을 한다.

```js
setInterval(() => {
  console.log("hi");
}, 1000);

// 첫번째 인수에 들어간 함수를 두번째 인수의 시간마다 실행하는 것이다.
// 이때 시간은 ms 기준이다.
```

<br>

### **Error handing**

---

<br>

try-catch 구문을 이용하여 에러를 컨트롤 할 수 있다.

```js
try {
  a;
} catch (e) {
  console.log("ERROR" + e);
}
```
