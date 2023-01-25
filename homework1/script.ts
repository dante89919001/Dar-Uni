import {random} from './random'


const btn = document.createElement('button');

let randomColor:Array<string> = ['red' , 'green', 'gray', 'black', 'blue', 'aqua'];
const body = document.querySelector('body') as HTMLBodyElement;
body.appendChild(btn) ;
 
btn.classList.add('btn');
btn.innerHTML = 'Нажми меня';
let tempNum:number,num:number;
btn.addEventListener('click', ()=>{
    if(!num){
        num = random(randomColor.length-1);
        tempNum = num;
    }else{
        num = random(randomColor.length-1);
        while(num == tempNum){
            num = random(randomColor.length-1);
        }
        tempNum = num;
    }

    body.style.background = randomColor[num];
})