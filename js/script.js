/* Задание на урок:

+1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

+2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,

  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    while (
      personalMovieDB.count == '' ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
  },

  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const q1 = prompt('Один из последних просмотренных фильмов?', 'Brainstorm');
      const q2 = prompt('На сколько оцените его?');
      if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
        personalMovieDB.movies[q1] = q2;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },

  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('произошла ошибка');
    }
  },

  showMyDB: function () {
    if (personalMovieDB.privat === false) {
      console.log(personalMovieDB);
    } else {
      console.log('База закрыта');
    }
  },

  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      let qq = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
      if (qq != '' && qq != null) {
        personalMovieDB.genres[i] = qq;
      } else {
        i--;
      }
      //personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
    }

    personalMovieDB.genres.forEach(function (item, i) {
      //console.log(`Любимый жанр #${i + 1} - это ${personalMovieDB.genres[i]}`);
      console.log(`Любимый жанр #${i + 1} - это ${item}`);
    });
  },

  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};

personalMovieDB.start();
//start();

//rememberMyFilms();
personalMovieDB.rememberMyFilms();
3;

//detectPersonalLevel();
personalMovieDB.detectPersonalLevel();
1;

//writeYourGenres();
personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();

//showMyDB();
personalMovieDB.showMyDB();
