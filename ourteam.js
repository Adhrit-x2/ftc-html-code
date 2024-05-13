window.scrollTo(0, 0);

var people = document.querySelectorAll(".person h2")
var peopleSections = document.querySelectorAll(".person-expand");
var bios = document.querySelectorAll(".bio");
peopleSections.forEach((element, index) => {
    var on = false;
    people[index].addEventListener("click", () => {
        element.style.height = on ? 0 : (bios[index].getBoundingClientRect().height + 20).toString() + "px";
        on = !on;
    });
});
peopleSections[peopleSections.length - 1].style.border = "none";

var listHeaders = document.getElementsByClassName("list-header");
var footerDroppers = document.getElementsByClassName("footer-dropdown");

var toggles = [false, false, false, false];
function toggleDropdown(index) {
    if (toggles[index]) {
        //footerDroppers[index].style.animation = "footer-dropup 0.5s 1 forwards";
        footerDroppers[index].style.height = 0;
    } else {
        //footerDroppers[index].style.animation = "footer-dropdown 0.5s 1 forwards";
        footerDroppers[index].style.height = index === 1 ? "150px" : "100px";
    }
    toggles[index] = !toggles[index];
}

