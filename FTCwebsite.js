window.scrollTo(0, 0);

let btn = document.querySelector('#btn')
let sidebar = document.querySelector ('.sidebar');

btn.onclick = function () {
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains("active")) {
        retract();
        menu.style.display = "none";
        fixTransitions("0.5s ease-in");
        delay(navItems);
    } else {
        menu.style.display = "block";
        dropped = false;
        fixTransitions("0.2s");
    }
};

let courses = document.querySelector(".dropdown");
let menu = document.querySelector(".dropdown-menu");
let dropped = false;
function toggleDropdown() {
    menu.style.display = "block";
    if (dropped) {
        retract();
    } else {
        drop();
    }
    dropped = !dropped;
}

function drop() {
    courses.classList.add("displayed");
    courses.classList.remove("hidden");
}
function retract() {
    courses.classList.add("hidden");
    courses.classList.remove("displayed");
}

let navItems = document.querySelectorAll(".nav-item");
function fixTransitions(value) {
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].style.transition = value;
    }
}
function delay(array) {
    window.setTimeout(function() {
        for (var i = 0; i < array.length; i++) {
            array[i].style.transition = "0.2s";
        }
    }, 500);
}

const parallax = document.getElementById("parallax");

    // Parallax Effect for DIV 1
    window.addEventListener("scroll", function () {
      let offset = window.pageYOffset;
      parallax.style.backgroundPositionY = offset * 0.7 + "px";
      // DIV 1 background will move slower than other elements on scroll.
    });
  
