let btn = document.querySelector('#btn')
let sidebar = document.querySelector ('.sidebar');

btn.onclick = function () {
    sidebar.classList.toggle('active');
};

let courses = document.querySelector("#dropdown");
let dropped = true;
function toggleDropdown() {
    if (dropped) {
        drop();
    } else {
        retract();
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

const parallax = document.getElementById("parallax");

    // Parallax Effect for DIV 1
    window.addEventListener("scroll", function () {
      let offset = window.pageYOffset;
      parallax.style.backgroundPositionY = offset * 0.7 + "px";
      // DIV 1 background will move slower than other elements on scroll.
    });
  
