'use strict';

//while
let num = 50;

while (num <= 55) {
  console.log(num);
  num++;
}

//do
do {
  console.log(num);
  num++;
} while (num < 55);

//for
for (let i = 0; i < 8; i++) {
  if (i === 6) {
    //break; - досрочная остановка цикла
    //continue; -пропуск элемента
  }
  console.log(i);
}
