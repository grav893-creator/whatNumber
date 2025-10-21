"use strict";
let randonNumber
let bodycolor=document.body
let count=parseFloat(document.querySelector(".count"))
let rnd=document.querySelector(".snova");
let play=document.querySelector(".play");
let number__p=document.querySelector(".number__p")
let number__input=document.querySelector('.number__input')
let text__one=document.querySelector('.text__one')
let text__two=document.querySelector('.text__two')
let count__item=document.querySelector('.count__item')
let counter = 20
let count__records=document.querySelector('.count__records')
const initialCounter = 20;
let arr=[]
const audio= new Audio("audio/button-click-double-noisy-close-muted.mp3");

rnd.addEventListener("click",function(){
    audio.play()
    randonNumber=parseInt(Math.round(Math.random()*19)+1);
    console.log(randonNumber);
    number__input.value = "";
    document.body.style.background = document.body.style.background = "linear-gradient(90deg, #2faaf3, #ee70bd, #de800b)";
    text__two.innerHTML='Угадай число!'
    number__p.parentElement.style.backgroundImage ='';
    number__p.innerHTML=''
    text__one.innerHTML='Начните угадывать'
    counter = initialCounter;
    count__item.innerHTML=`${counter}`
})  

play.addEventListener('click',function(){
    audio.play()
    number__input=document.querySelector(".number__input")
    let value=parseInt(number__input.value)
    
    if(value==randonNumber){
        
        number__p.parentElement.style.backgroundImage = "none";
        number__p.innerHTML=randonNumber
        text__one.innerHTML='Поздравляю вас вы угадали! &#127881;'
        text__two.innerHTML='Начните игру снова! &#128513; '
        document.body.style.background = "linear-gradient(90deg, #0f5739, #3d8e66, #45c9a4, #46b5a9, #52c9eb)";
        arr.push(counter);
        let bestRecords=Math.max(...arr) 
        count__records.innerHTML=`Ваш рекорд: &#127941; ${bestRecords}`
    }
    else if(value>20){
        text__one.innerHTML='Значение должно быть до 20 &#128557;'
    }
    else if(value<1){
        text__one.innerHTML='Значение должно быть от 1 &#128557;'
    }
    else if(value>randonNumber){
        text__one.innerHTML='Загаданное число меньше  	&#128533;'

        counter--;
        count__item.innerHTML=counter
    }
    else if(value<randonNumber){
        text__one.innerHTML='Загаданное число больше  	&#128533;'
        counter--;
        count__item.innerHTML=counter

    }
})
