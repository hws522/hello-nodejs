"use strict";

const details = `자세한 내용`;

let str = `node.js `;
str += `올인원 ` + `기존 방법 `; // 기존
console.log(str);

str += `올인원 ${details}`; // template string
console.log(str);

const int = 1;

str += `${str}의 값은 ${int}`;
console.log(str);
