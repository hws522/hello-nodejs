//IIFE
(function () {
  // 이처럼 이름이 없는 함수를 익명함수라 한다.
  var lang = "js";
})();

console.log(lang); // 외부에서 접근이 불가능하므로 오류가 발생한다.

var r = (function () {
  var lang = "js";
  return lang;
})();

console.log(r);
