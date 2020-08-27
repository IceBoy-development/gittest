"use strict";
//типы данных
/*let number = 4.6;
console.log(number);//number

console.log(4/0);//infinity


console.log('ii'* 9);//nan


const pers = 'dde';//строковый

const bool = false;//логоический


console.log(some);//null

let und;
console.log(und);//undefined

const obj = { 
    name: 'john',// объекты
};
console.log(obj.name);

let rrt = ['wwww', 45, false];//массивы
console.log(rrt[2]);*/
//--------------------------------------------------------------------
//alert, confirm,prompt

//alert("hellow");//alert

//const result = confirm('are you here?');
//console.log(result);

//const an = prompt('вам есть 18', '');
//console.log(typeof(an));

//const an = +prompt('вам есть 18', '');
//console.log(typeof(an));

//подтверждение частного случая объекта
const peton = [];
peton[0] = prompt('как твоё имя','');
peton[1] = prompt('как твоё имя','');
//document.write(peton);

//интерполяция

/*const user = 'Ivan';
alert(`привет, ${user}`);
console.log(4+ +'9');

let incr = 10,
decr = 10;
console.log(++decr);


console.log(10%5);


let check = true,
    close = true;
    console.log(check||close);
   /* let a = 10, 
    b = 100;
if (a>b){
    console.log('Nice');
} else{
    console.log('bad');
}

const dak = 100;

if (dak>101){
    console.log('hh');
}else if(dak>1000){
    console.log('ll');
}else{
    console.log('ok');
}
(dak === 100)? console.log('ok') : console.log('bad');

const a = 50;
 switch(a){
     case 49:
         console.log('bad');
         break;
         case 51:
         console.log('very bad');
         break;
         default:
            console.log('mayby ');
            break;
 }


 /*while(a < 55){
     console.log(a);
     a++;
     
 }
    


let a= 50;

 do{
    console.log(a);
    a++;
 }
while(a<55);*/

 
/*let num = 10;
function test(){
    num+=10; 
}
console.log(num);


function calc(a, b) {
    return (a * b);
}
console.log(calc(8, 3));
console.log(calc(5, 3));
console.log(calc(448, 3));
console.log(calc(48, 3));


function cast(){
    let papa = 5 ;
    return papa;
}
const another = cast(); 
console.log(another);

const far = 'yellow ball';
const arr = [1,2,3,4,5];
console.log(arr.length);

const fert = "type";
console.log(fert.indexOf('type'));
console.log(fert.toUpperCase());


const dart = "Привет, Андрей!";
console.log(dart.slice(6,14));

const dar = "12.4";
console.log(Math.round(dar));

function learn (lang,callback){
    callback();
    console.log(`Я учу ${lang}`);
    
}
function done(){
    console.log('I am smart boy');
}
learn('JS',done);

const options = {
    name:'vadik',
    width:400,
    height:400,
    colors:{
        border:'black',
        bg:'red'
    }
};

const {border,bg} = options.colors;
console.log(border,bg);
//console.log(options);
let counter = 0;
for (let key in options){
    if (typeof(options[key])==='object'){
        for (let i in options[key]){
            console.log( 'Ключ:'+ key + "Значение:" + options[key][i]);
        }
        
    }else{
        console.log( 'Ключ:'+ key + "Значение:" + options[key]);
        counter++;
    }
    
}
console.log(counter);

const tamb = [1,2,3,6,8];
tamb[99] = 5;
console.log(tamb.length);*/

const str = prompt("","");
const products = str.split(", " );
console.log(products.join(";"));

const ya = "Auslan;Fadik;Binat";
const fall = ya.split(";");//превратили str в массив
console.log(fall.join(";"));//превращает массив str в строку

const gad = "apple;kivi;banana";
const tru = gad.split(";");
tru.sort();
console.log(tru.join(";"));

 
