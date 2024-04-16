//Button postion chage 
//Taking reffern of the buttn 
let a=document.querySelector("#bttn1");// No button
let imgh=document.querySelector("#hide");//image to hide
let cB=document.querySelector("#yesbtn");//Image show button/yes button
let img2=document.querySelector("#unhide");//img 2 which is nedd to show

//Functinons
//Changing no button postion
a.addEventListener("click",()=>{
    let i = Math.floor(Math.random()*90)+1;
    let j = Math.floor(Math.random()*90)+1;
    a.style.left = i+"px";
    a.style.top = j+"px";
})
//img hide or show
cB.addEventListener('click',()=>{
        imgh.style.visibility='hidden';
        img2.style.visibility='visible';
})
