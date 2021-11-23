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

let numberOfFilms;


function start(){
  numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  
  rememberMyFilms: function(){
    for (let i = 0; i < 2; i++) {
      const q1 = prompt('Один из последних просмотренных фильмов?', 'Brainstorm');
      const q2 = prompt('На сколько оцените его?');
      if (q1 != null && q2 != null && q1 != '' && q2 !='' && q1.length < 50){
        personalMovieDB.movies[q1] = q2;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  
  },

  detectPersonalLevel: function(){
    if (personalMovieDB.count<10){
      console.log('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30){
      console.log('Вы киноман');
    } else {
      console.log('произошла ошибка');
    }
  
  },

  showMyDB: function(){
    if (personalMovieDB.privat === false){
      console.log(personalMovieDB);
    } else {
      console.log('База закрыта');
    }
  },


//   3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
// Если он это сделал - возвращать его к этому же вопросу. 

//После того, как все жанры введены - 
// при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"

  writeYourGenres: function(){
    for (let i = 0; i<3; i++){

      personalMovieDB.genres[i] = prompt (`Ваш любимый жанр под номером ${i+1}`,'');
    }
    
    personalMovieDB.genres.forEach(function(i){
      console.log(`Любимый жанр #${i} - это ${personalMovieDB.genres[i]}`);
    });

  },

  toggleVisibleMyDB: function(){
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {personalMovieDB.privat = true;}
  }


};


//rememberMyFilms();
personalMovieDB.rememberMyFilms();3

//detectPersonalLevel();
personalMovieDB.detectPersonalLevel();1


//writeYourGenres();
personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();

//showMyDB();
personalMovieDB.showMyDB();