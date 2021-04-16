// Curried Function
// Closure

// function getDiscount(price, rate) {
//   return price * rate;
// }

const getDiscount = (price, rate) => price * rate;

getDiscount(10000);

// 회원 등급에 따른 할인율을 때에 따라 계속 기입하지 않고 한번에 하는 방법.

const getDiscount = (rate) => (price) => rate * price;

const getTenpercentOff = getDiscount(0.1);

getTenpercentOff(10000);
