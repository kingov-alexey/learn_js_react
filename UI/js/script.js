/* Задания на урок:

+1) Удалить все рекламные блоки со страницы (правая часть сайта)

+2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
  movies: ['Логан', 'Лига справедливости', 'Ла-ла лэнд', 'Одержимость', 'Скотт Пилигрим против...'],
};

//1) Удалить все рекламные блоки со страницы (правая часть сайта)
// const adv = document.querySelector('.promo__adv');
// adv.remove();

const adv2 = document.querySelectorAll('.promo__adv img');
adv2.forEach(item => {
  item.remove();
});

//2) Изменить жанр фильма, поменять "комедия" на "драма"
// const genre = document.querySelector('.promo__genre');
// genre.textContent = 'Драма';

const poster = document.querySelector('.promo__bg');
const genre = poster.querySelector('.promo__genre');
genre.textContent = 'Драма';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

poster.style.backgroundImage = 'url("img/bg.jpg")';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту

const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `<li class="promo__interactive-item">
    
    ${i + 1} ${film}
         <div class="delete"></div></li>`;
});

// 5) Добавить нумерацию выведенных фильмов

//

////////////////////////////// 28
const btn = document.querySelector('button');

// btn.onclick = () => {
//   alert('test');
// };

// btn.addEventListener('click', () => {
//   alert('CLick');
// });

// btn.addEventListener('click', () => {
//   alert('CLick11');
// });

// btn.addEventListener('mouseenter', (event) => {
//   console.log('hover title');
// });

// const deleteBtn = event => {
//   event.target.remove();
// };

// btn.addEventListener('clik', deleteBtn);

// const link = document.getElementsByClassName('.promo__adv-title');
// link[0].addEventListener('click', e => {
//   //e.preventDefault();
//   alert('что то произошло');
// });
