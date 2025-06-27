const a=document.querySelector("#main");
const crsr=document.querySelector(".cursor")


a.addEventListener("mousemove",function(illa){
 crsr.style.left=illa.x +"px"
 crsr.style.top=illa.y +"px"
})
