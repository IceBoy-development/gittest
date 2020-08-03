"use strict";

const NumbersofFilmes = prompt ('Сколько фильмов вы уже посмотрели?',"");

const perconalMovieDB = {
    count: NumbersofFilmes,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
/*const a = prompt("Один из последних просмотренных фильмов?",""),
      b = prompt("На сколько оцените его",""),
      c = prompt("Один из последних просмотренных фильмов?",""),
      d = prompt("На сколько оцените его","");

      perconalMovieDB.movies[a] = b;
      perconalMovieDB.movies[c] = d;*/

      for( let i = 0; i < 2; i++){
         const a = prompt("Один из последних просмотренных фильмов?",""),
        b = prompt("На сколько оцените его","");


        if(a != null && b != null && a != '' && b != '' && a.length < 50 ){
            perconalMovieDB.movies[a] = b;
            console.log('done');
        }else{
            console.log('error');
            i--;
        }
        
        
      }
      if( perconalMovieDB.count < 10){
        alert('Просмотрено довольно мало фильмов');
    }else if ( perconalMovieDB.count >= 10 && perconalMovieDB.count < 30 ){
        alert('Вы классический зритель');
    }else if(perconalMovieDB.count >= 30){
        alert('вы киноман');
    }else{
        alert('Произошла ошибка');
    }


      console.log((perconalMovieDB));