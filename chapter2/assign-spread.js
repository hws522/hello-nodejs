const obj = {
  title: "node.js 올인원",
};

const newObj = {
  name: "node.js 온라인",
};

const ret = Object.assign({}, obj, newObj);

console.log(ret);

const ret2 = {
  ...obj,
  ...newObj,
};

console.log(ret2);

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const ret3 = [...arr, ...arr2];
console.log(ret3);
