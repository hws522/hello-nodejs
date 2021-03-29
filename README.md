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

back-end vs front-end 의 접근으로 보면 쉽다. 특징들이 몇가지 있는데 각 부분마다 다르게 사용해야하는 것들이 많다.

프론트엔드에서는 window 를 사용한다면, 백엔드에서는 브라우저가 없기 때문에 사용할 수 없다.

프론트엔드에서는 import를 통해 모듈를 가져왔다면, node.js 에서는 특별한 설정을 하지 않는 이상 require 를 사용하여 패키지를 정의한다.

<br>

### **REPL**

---

node.js 에서는 2가지의 코딩방법이 있다.

첫번째는 파일 내부에서 코딩하는 방법이고, 두번째는 실시간으로 채팅하듯이 코딩하는 방법이 있다. REPL은 이 중 두번째 방법이다.

windows 에서 REPL 을 사용하는 가장 좋은 방법은 파워쉘기반으로 하는 것이다.

REPL 은 어떠한 특정 객체에 대한 정보가 필요할 때 가장 많이 사용하고, 한줄 단위로 실행을 바로바로 해보고 싶을 때 주로 사용한다.

<br>

### **NPM**

---

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

사용되는 빈도가 많지는 않으나, 개발을 하거나 테스트용도로 적합하게 사용할 수 있으므로 알아둘 필요가 있다.

npx 는 npm 처럼 설치 후 실행하는 목적이 아니라, 설치하지않고 일회성으로 사용해보는, 테스트 목적으로 사용한다. 그래서 save, uninstall 옵션이 없다.

ex) `npx cowsay "hello"`

<br>

### **NODEMON**

---

nodemon 은 파일에 변화가 생기면 자동으로 변화를 감지하여 실행한다.

`"npm i nodemon -g"` 를 이용하여 nodemon 을 설치한다.

<br>

### **Module.exports**

---

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
