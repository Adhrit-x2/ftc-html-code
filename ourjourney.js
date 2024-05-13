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
