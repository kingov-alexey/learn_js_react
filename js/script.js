'use strict';

function showFerstMessage(a,b){
  let result = a+b;
  console.log('Hello world!'+result);
}

showFerstMessage(4,5);

function calc(a,b){
  return (a+b);
}

console.log(calc(4,3));

function ret(){
  let num=50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function(){
  console.log('hello');
};

logger();

const calc2 = (a,b)=>a+b;
console.log(calc2(5,6));

