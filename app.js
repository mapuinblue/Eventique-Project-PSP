// Mobile menu functionality// Mobile menu functionality.

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// Event listener for the mobile menu button.
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Functionality for moving a circle element up and down.
document.addEventListener("DOMContentLoaded", function() {
    var circle = document.getElementById("circle");
    var upBtn = document.querySelector(".upBtn");
    var downBtn = document.querySelector(".downBtn");


    var moveValue = 0; // Initial movement value for the circle.

    // Function for moving the circle upwards.
    upBtn.onclick = function() {
        moveValue -= 200; // ajustar el valor del movimiento aquí
        circle.style.top = moveValue + "px";
    }

    // Function for moving the circle downwards.
    downBtn.onclick = function() {
        moveValue += 250; // ajustar el valor del movimiento aquí
        circle.style.top = moveValue + "px";
    }
});
