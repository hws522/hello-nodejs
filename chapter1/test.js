const obj = {
  title: "node.js",
};

function isEmptyObj() {
  if (obj.title) {
    return true;
  } else {
    return false;
  }
}

const isEmptyObj = () => (obj.title ? true : false);

isEmptyObj();
