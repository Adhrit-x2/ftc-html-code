window.scrollTo(0, 0);

let btn = document.querySelector('#btn')
let sidebar = document.querySelector ('.sidebar');
let ableToRemoveDropdown = true;

btn.onclick = openNav;

function openNav () {
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains("active")) {
        retract();
        menu.style.display = "none";
        fixTransitions("0.5s ease-in");
        delay(navItems);
        displayNavItems("block");
    } else {
        menu.style.display = "block";
        dropped = false;
        fixTransitions("0.2s");
        displayNavItems("none");
    }
    removeTooltips(sidebar.classList.contains("active"));
    removeDroplist(sidebar.classList.contains("active") ? "block" : "none");
    removeDropdown(sidebar.classList.contains("active"));
};

let courses = document.querySelector(".dropdown");
let menu = document.querySelector(".dropdown-menu");
let dropped = false;
function toggleDropdown() {
    if (sidebar.classList.contains("active") && ableToRemoveDropdown) {
        menu.style.display = "block";
        if (dropped) {
            retract();
        } else {
            drop();
        }
        dropped = !dropped;
    }
}
menu.addEventListener("mouseover", function() {
    ableToRemoveDropdown = false;
});
menu.addEventListener("mouseout", function() {
    ableToRemoveDropdown = true;
});

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
function delay(array, style) {
    window.setTimeout(function() {
        for (var i = 0; i < array.length; i++) {
            array[i].style.transition = "0.2s";
        }
    }, 500);
}

let tooltips = document.querySelectorAll(".tooltip");
function removeTooltips(active) {
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.transform = "translate(-55%, -100%) scale(" + (active ? "1)" : "0)");
    }
}
removeTooltips(false);

let navBtns = document.querySelectorAll(".nav-btn");
function displayTooltips() {
    for (var i = 0; i < navBtns.length; i++) {
        var n = navBtns[i];
        n.addEventListener("mouseover", function() {
            tooltips[0].style.transform = "translate(-55%, -100%) scale(1)";
            tooltips[1].style.transform = "translate(-55%, -100%) scale(1)";
            tooltips[2].style.transform = "translate(-55%, -100%) scale(1)";
            tooltips[3].style.transform = "translate(-55%, -100%) scale(1)";
            tooltips[4].style.transform = "translate(-55%, -100%) scale(1)";
        });
        n.addEventListener("mouseout", function() {
            tooltips[0].style.transform = "translate(-55%, -100%) scale(0)";
            tooltips[1].style.transform = "translate(-55%, -100%) scale(0)";
            tooltips[2].style.transform = "translate(-55%, -100%) scale(0)";
            tooltips[3].style.transform = "translate(-55%, -100%) scale(0)";
            tooltips[4].style.transform = "translate(-55%, -100%) scale(0)";
        });
    }
}
displayTooltips();

function displayNavItems(style) {
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].style.transform = (style === "block") ? "scaleY(1)" : "scaleY(0)";
    }
}
displayNavItems("none");

var droplists = document.querySelectorAll(".drop-list");
function removeDroplist(style) {
    for (var i = 0; i < droplists.length; i++) {
        droplists[i].style.display = style;
    }
}
removeDroplist("none");

function removeDropdown(active) {
    menu.style.transform = active ? "scale(1)" : "scale(0)";
}
removeDropdown(false);

/*
Notes to self:
WHEN SIDEBAR ISN'T ACTIVE:
the dropdown li elements must be removed
the nav-item classes must also be removed
*/

const parallax = document.getElementById("parallax");
/*
// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});
document.addEventListener("dblclick", function(event) {
    event.preventDefault();
});
*/
