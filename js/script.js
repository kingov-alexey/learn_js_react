'use strict';

//const obj = new Object();

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red',
  },
  makeTest: function () {
    console.log('my first method');
  },
};

options.makeTest();

const { border, bg } = options.colors; //деструктуризация объекта

console.log(options.name);

delete options.name;

console.log(options);

let counter = 0;
for (let key in options) {
  if (typeof options[key] === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
  }
}

console.log(Object.keys(options).length);

// С ПОМОЩЬЮ of НЕ МОЖЕМ ПЕРЕБРАТЬ ОБЪЕКТ for (let key of options) {
//   console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }
