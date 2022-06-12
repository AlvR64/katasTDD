const { isInteger } = require("lodash");

/**
 * @param {int} number - number of primes to generate
 * @returns {Array<int>} prime factors
 */
function generate(number) {

  const numbers=[];


  var cont=2;

  while(number>1){
    if(number%cont==0){
      numbers.push(cont);
      number/=cont;
    }else{
      cont++;
    }
  }


  return numbers;

}

module.exports = {
  generate
};
