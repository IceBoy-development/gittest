"use strict";

let NumbersofFilmes;

function start() {
    NumbersofFilmes = prompt('Сколько фильмов вы уже посмотрели?', "");

    while (NumbersofFilmes == '' || NumbersofFilmes == null || isNaN(NumbersofFilmes)) {
        NumbersofFilmes = prompt('Сколько фильмов вы уже посмотрели?', "");
    }
}
start();

const perconalMovieDB = {
    count: NumbersofFilmes,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyfilmes() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его", "");


        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            perconalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }

}
rememberMyfilmes();


function showMyDB() {
    if (perconalMovieDB.privat == false) {
        console.log(perconalMovieDB);
    } else {
        console.log();
    }
}
showMyDB();

function writeYourGanres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером  ${i}`);
        perconalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGanres();

function detectPerconalLavel() {
    if (perconalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (perconalMovieDB.count >= 10 && perconalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (perconalMovieDB.count >= 30) {
        alert('вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}
detectPerconalLavel();