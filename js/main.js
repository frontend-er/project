//Создаем переменную и помещаем в нее ответы на вопросы пользователя








const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   geners: [],
   privat: true,
   showDB: function (hidden) {
      if (!hidden) {
         console.log(personalMovieDB);
      }
   },
   writeYourGeners: function () {
      for (let i = 1; i <= 3; i++) {
         let genre = prompt(`Введите ваш любимый жанр ${i}`, '');
         if (genre === '' || genre == null) {
            console.log("Вы ввели некоректные данные!");
            i--;
         } else {
            personalMovieDB.geners[i - 1] = genre;

         }
      }

      personalMovieDB.geners.forEach((item, i) => {
         console.log(`Любимый жанр под номером ${i + 1} ${item}! `);
      });

   },
   start: function () {
      personalMovieDB.count = prompt("Сколько фильмов Вы уже посмотрели?", "");
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = prompt("Сколько фильмов Вы уже посмотрели?", "");

      }
   },
   rememberMyFilms: function () {
      for (let i = 0; i < personalMovieDB.count; i++) {
         const lastFilm = prompt("Один из просмотренных фильмов?", ""),
            lastFilmRating = prompt("На сколько оцените его?", "");

         if (lastFilm != null && lastFilmRating != null && lastFilm != '' && lastFilmRating != '' && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = lastFilmRating;
            console.log("done");

         } else {
            console.log("erroe");
            i--;
         }
      }
   },
   detectPersonalLevel: function () {
      if (personalMovieDB.count < 10) {
         console.log("Просмотрено мало фльмов");
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
         console.log("Вы продвинутый зритель");


      } else if (personalMovieDB.count >= 30) {
         console.log("Вы киноман");

      } else {
         console.log("Ошибка");

      }
   },
   toggleVisibleMyDB: function () {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;

      } else {
         personalMovieDB.privat = true;
      }
   }

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




