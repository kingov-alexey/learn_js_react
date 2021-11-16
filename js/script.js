'use strict';

function first(){
  setTimeout(function(){
    console.log('response');
  }, 500)
}

function second(){
  console.log(2);
}

first();
second();

function learnJS(lang, callback){
  console.log(`я учу: ${lang}`);
  callback();
}

function done(){
  console.log('я прошел этот урок');
}

learnJS('JavaScript', done)