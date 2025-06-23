'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let ammount = 0;

  return function adder(a) {
    if (a === undefined) {
      const sum = ammount;

      ammount = 0;

      return sum;
    }

    ammount += a;

    return adder;
  };
}

module.exports = makeInfinityAdder;
