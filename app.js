const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    var circle = document.getElementById("circle");
    var upBtn = document.querySelector(".upBtn");
    var downBtn = document.querySelector(".downBtn");


    var moveValue = 0;


    upBtn.onclick = function() {
        moveValue -= 200; // ajustar el valor del movimiento aquí
        circle.style.top = moveValue + "px";
    }


    downBtn.onclick = function() {
        moveValue += 250; // ajustar el valor del movimiento aquí
        circle.style.top = moveValue + "px";
    }
});
