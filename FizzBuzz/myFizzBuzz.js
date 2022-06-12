const _ = require('lodash');

const DEFAULT_RULES = {
  3: 'Fizz',
  5: 'Buzz'
};

class FizzBuzz {
  constructor(rules = {}) {
    this.rules = { ...DEFAULT_RULES, ...rules };
  }

  fizzBuzz(n) {
    var numToText="";
    
    for (const numero in this.rules) {
      if(n%numero==0){
        numToText+=this.rules[numero];
      }
    }

    if(numToText!=""){
      return numToText;
    }

    var num=n.toString();
	  return num;
  }


  generate(range = { from: 1, to: 15 }){
    var num=[];

    for (let i = range.from; i <= range.to; i++) {
      num.push(this.fizzBuzz(i));
    }

    return num;
  }

}

module.exports = { FizzBuzz };