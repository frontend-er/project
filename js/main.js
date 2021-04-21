//Создаем переменную и помещаем в нее ответы на вопросы пользователя

const numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", "");

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   geners: {},
   privat: false,


};


const lastFilm = prompt("Один из просмотренных фильмов?", "");
const lastFilmRating = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastFilm] = lastFilmRating;



console.log(personalMovieDB);


console.log(lastFilm);