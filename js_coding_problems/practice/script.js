// 4 Pillars of DOM

// 1. Selection of an Element
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listener


// let a=document.querySelector("h1")
// a.innerHTML="Changed HTML"
// a.style.color="blue"
// a.style.backgroundColor="black"
 
// a.addEventListener("click",function(){
//     a.innerHTML="How are you?"
// })

let bulb=document.querySelector("#bulb")
let btn= document.querySelector("button")
let flag=0
btn.addEventListener("click",function(){
    if(flag==0){
        bulb.style.backgroundColor="yellow";
        flag=1
        btn.innerHTML="OFF"
    }
    else{
        bulb.style.backgroundColor="white";
        flag=0;
        
        btn.innerHTML="ON"
    }

   
})