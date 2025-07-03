let isstatus=document.querySelector("h5");
let add=document.querySelector("#add");
var flag=0;


add.addEventListener("click",function(){
    if(flag==0){
        add.innerHTML="Remove Friend";
        add.style.backgroundColor=  "cornflowerblue";
        isstatus.innerHTML="Friends";
        isstatus.style.color="green";
        flag=1;
    }else{
        add.innerHTML="Add Friend";
        add.style.backgroundColor=  "cadetblue";
        isstatus.innerHTML="Stranger";
        isstatus.style.color="rgb(88, 87, 87)";
        flag=0;
    }
   
 
})

