'use strict';

//Общий слушатель для того чтобы сформировать структуру дом и начать скрипты, а атрибуты потом
document.addEventListener('DOMContentLeaded', () => {
  //
  //Начальный стейт
  //
  const movieDB = {
    movies: [
      'Логан',
      'Лига справедливости',
      'Ла-ла лэнд',
      'Одержимость',
      'Скотт Пилигрим против...',
    ],
  };

  //селекторы
  const poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]'),
    movieList = document.querySelector('.promo__interactive-list');

  //слушатели
  addForm.addEventListener('submit', event => {
    event.preventDefault();

    const newFilm = addInput.nodeValue;
    const favorite = checkbox.ariaChecked;

    movieDB.movies.push(newFilm);
    movieDB.movies.sort();
  });

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

  genre.textContent = 'Драма';

  // 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
  // Реализовать только при помощи JS

  poster.style.backgroundImage = 'url("img/bg.jpg")';

  function createMovieList(films, parent) {
    movieList.innerHTML = '';

    movieDB.movies.sort();

    movieDB.movies.forEach((film, i) => {
      movieList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
         <div class="delete"></div>
         </li>`;
    });
  }

  //
});

////////////////////////////////////////// 30
/* Задания на урок: 30

1) Реализовать функционал, что после заполнения формы и 
нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. 
Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.

Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */
