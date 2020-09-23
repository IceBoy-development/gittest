"use strict";

const perconalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        perconalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', "");
    
        while (perconalMovieDB.count == '' || perconalMovieDB.count == null || isNaN(perconalMovieDB.count)) {
            perconalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', "");
        }
    },
    rememberMyfilmes: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ""),
                b = prompt("На сколько оцените его", "");
       
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                perconalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    
    },
    showMyDB:function() {
        if (perconalMovieDB.privat == false) {
            console.log(perconalMovieDB);
        } else {
            console.log();
        }
    },
    writeYourGanres:function() {
        //for (let i = 1; i <= 3; ++i) {
            /*let genre = prompt(`Ваш любимый жанр под номером  ${i}`); 

            if ( genre === null || genre === ""){
                console.log("Вы ввели некорректные данные!!!");
                i--;
                                    
            }else{
                perconalMovieDB.genres[i - 1] = genre;
            }*/
            let genres = prompt("Введите свои любимые жанры через запятую").toUpperCase();
            if ( genres === null || genres === ""){
                console.log("Вы ввели некорректные данные!!!");
                
        }else{
            perconalMovieDB.genres= genres.split(",");
           perconalMovieDB.genres.sort();
        }
        
        perconalMovieDB.genres.forEach ((item,i)=>{
            console.log(`Любимый жанр ${i+1} - это ${item}`);
     });

    },
    detectPerconalLavel:function() {
        if (perconalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (perconalMovieDB.count >= 10 && perconalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (perconalMovieDB.count >= 30) {
            alert('вы киноман');
        } else {
            alert('Произошла ошибка');
        }
       
    },
    toggleVisibleMyDB: function(){
        if (perconalMovieDB.privat === false){
            perconalMovieDB.privat = true;
        } 
        else {
            perconalMovieDB.privat = false;
        }
                 
        
    }
    
};
perconalMovieDB.start();
perconalMovieDB.rememberMyfilmes();
perconalMovieDB.showMyDB();
perconalMovieDB.writeYourGanres();
perconalMovieDB.toggleVisibleMyDB();
perconalMovieDB.detectPerconalLavel()



