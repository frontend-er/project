/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded' , () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

document.querySelector('.promo__adv').remove();
document.querySelector('.promo__genre').textContent = 'Драма';
const bg =  document.querySelector('.promo__bg'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      addImput = addForm.querySelector('.adding__input'),
      checkBox = addForm.querySelector('[type="checkbox"]');


    addForm.addEventListener('submit', (e) => {
        e.preventDefault();


        let newFilm = addImput.value;
        const favorit = checkBox.checked;

        if(newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createList(movieDB.movies, movieList);
        }
        if (favorit) {
            console.log("Добавляем любимый фильм")
        }

        e.target.reset();
        

    });


bg.style.background = 'url(../img/bg.jpg) center center/cover no-repeat ';


const sortArr =  (arr) => {
    arr.sort();
};


function createList (films, parent) {
    parent.innerHTML = '';
    sortArr(films);

    films.forEach((film, i) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} : ${film}
                                <div class="delete"></div>
                            </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            films.splice(i, 1);
            createList(films, parent);
            
        });

    });
}


createList(movieDB.movies, movieList);

});



