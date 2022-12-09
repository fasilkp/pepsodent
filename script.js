// var navProduct=document.getElementById("health-nav");
// navProduct.addEventListener('mouseover', ()=>{
//     var productHover =document.getElementById("healthHover");
//     productHover.style.display="flex";
// })
// navProduct.addEventListener('mouseout', ()=>{
//     var productHover =document.getElementById("healthHover");
//     productHover.addEventListener('mouseover', ()=>{
//         productHover.style.display="flex";
//     })
//     productHover.addEventListener('mouseout', ()=>{
//         productHover.style.display="none";
//     })
// })

function showNavHover(id){
    var navHover =document.getElementById(id);
    navHover.style.display="flex";
}
function removeNavHover(id){
    var navHover =document.getElementById(id);
    navHover.style.display="none";
}

var menu=document.getElementById("menu");
var click=false
menu.addEventListener('click',()=>{
    click=!click;
    var menuBar=document.getElementById("menuBar");
    var menuIcon=document.getElementById("menuIcon");
    if(click){
        menuBar.style.left="0px"
        menuIcon.classList.remove("ri-menu-line");
        menuIcon.classList.add("ri-close-fill");
    }
    else{
        menuBar.style.left="1000px"
        menuIcon.classList.add("ri-menu-line");
        menuIcon.classList.remove("ri-close-fill");
    }
})