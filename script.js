import  array  from "./file.js";
const menu= document.querySelector('.menu');
const side=document.querySelector('.side-bar');

let isToggled=false;
menu.addEventListener("click", what=()=>{

    side.style.display=isToggled?"block":"none";
     if (isToggled==true) {
          isToggled=false
     }
     else{
        isToggled=true
     }

}, false

);
console.log(array);
   let title= document.querySelector('.cards');
   title.innerHTML="<h1>whoop</h1>"


