//Создаем переменную и помещаем в нее ответы на вопросы пользователя
"use sctrict";
const numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", "");


const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   geners: {},
   privat: false,


};

/*
for (let i = 0; i < 2; i++) {


   const lastFilm = prompt("Один из просмотренных фильмов?", "");
   const lastFilmRating = prompt("На сколько оцените его?", "");

   if (lastFilm != null && lastFilmRating != null && lastFilm != '' && lastFilmRating != '' && lastFilm.length < 50) {
      personalMovieDB.movies[lastFilm] = lastFilmRating;
      console.log("done");

   } else {
      console.log("erroe");
      i--;
   }



}

*/

function showDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}

showDB();


console.log(personalMovieDB);


function wrideYourGeners() {
   for (let i = 1; i <= 3; i++) {
      personalMovieDB.geners[i - 1] = prompt(`Введите ваш любимый жанр ${i}`, '');
   }
}

wrideYourGeners();