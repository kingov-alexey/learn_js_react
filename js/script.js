'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

for (let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = 'blue';
}

hearts.forEach(item => {
  item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
//const text = document.createTextNode('тут был я');

div.classList.add('black');

//document.body.append(div);
wrapper.appendChild(div);

//document.querySelector('.wrapper').append(div);

// wrapper.append(div);
// wrapper.prepend(div);
 
// hearts[0].before(div);
// hearts[0].after(div);

//wrapper.insertBefore(div, hearts[2]);

//УДАЛЕНИЕ ЭЛЕМЕНТОВ
//circles[0].remove();
//wrapper.removeChild(hearts[1]);

//ЗАМЕНА ЭЛЕМЕНТОВ
//hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]);

//ВСТАВКА HTML элементов. Не пренебрегать, исопльзоать по острой необходимости
//div.innerHTML = 'hello world';
div.innerHTML = '<h1>hello world</h1>';

//Вставка текста
div.textContent = 'hello';

//вставка HTML в определенное место
div.insertAdjacentHTML('beforebegin', '<h3>HELLO</h3>');
