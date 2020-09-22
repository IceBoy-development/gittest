'use strict';

const box = document.getElementById('box');
console.log(box);
box.style.cssText = 'background-color:red; width:500px';

const btns = document.getElementsByTagName('button');
console.log(btns[4]);
btns[2].style.borderRadius = '100%';

const circles = document.getElementsByClassName('circle');
console.log(circles);


const hearts = document.querySelectorAll('.heart');
console.log(hearts);
const wrapper = document.querySelector('.wrapper');

for (let i = 0; i < hearts.length;i++){
    hearts[i].style.backgroundColor = 'orange';
  
}

hearts.forEach(item =>{
    item.style.backgroundColor = 'orange';
});

hearts.forEach(item=>{
    console.log(item);
}); 

const oneHerts = wrapper.querySelector('.heart');//мы можем использовать wrapper 
//вместо  document так как heart находится во власти 

console.log(oneHerts);

const div = document.createElement('div');
//const text = document.createTextNode("dfghjk");
div.classList.add('black');

//wrapper.appendChild(div);//такой же как и выше
hearts[0].before(div);//первое сердечко после div
//circles[0].remove();//удалилил первый кружок

wrapper.insertBefore(div,hearts[0]);//поместил див на первым сердечком
wrapper.replaceChild(circles[0],hearts[0]);

div.innerHTML = "<h1>Hellow World</h1>";
document.body.append(div);//добавили в конец боди ещё один класс wrapper

div.insertAdjacentHTML("afterend", '<h2>Hellow</h2>');


for (let i = 1; i < 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if (i % 3 === 0){
        console.log("Fizz");
    }else if (i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}






