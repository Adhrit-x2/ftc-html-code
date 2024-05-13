window.scrollTo(0, 0);

function topNavFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var pageNumbers = document.querySelector(".page-numbers");
pageNumbers.style.transform = "scale(" + (0.00046628 * window.innerWidth + 0.4).toString() + ")";
$(window).resize(function() {
    pageNumbers.style.transform = "scale(" + (0.00046628 * window.innerWidth + 0.4).toString() + ")";
});

var pages = document.querySelectorAll(".portfolio-page");
for (var i = 0; i < pages.length; i++) {
    pages[i].setAttribute("style", "transform: scaleX(" + Math.pow(-1, i) + "); z-index: " + (31 - i).toString() + ";");
}

var currentPage = 1;
var leftbtn = document.querySelector(".left-flip");
var rightbtn = document.querySelector(".right-flip");
var pageContainer = document.querySelector(".page-container");
function handleForwardFlip() {
    if (currentPage === 1) {
        pageContainer.style.animation = "right-to-left-1 ease-out 1s 1 forwards";
    }
    if (currentPage === 15) {
        pageContainer.style.animation = "left-to-right-1 ease-out 1s 1 forwards";
    }
    const currentPageIndex = currentPage - 1;
    if (currentPageIndex < pages.length - 1) {
        pages[currentPageIndex].classList.add('flip-left-front');
        pages[currentPageIndex + 1].classList.add('flip-left-back');
        pages[currentPageIndex].addEventListener('animationend', function() {
            pages[currentPageIndex].classList.remove('flip-left-front');
            pages[currentPageIndex].style.transform = "translateX(-100%) perspective(1000px) rotateY(-180deg)";
        });
        pages[currentPageIndex + 1].addEventListener('animationend', function() {
            pages[currentPageIndex + 1].classList.remove('flip-left-back');
            pages[currentPageIndex + 1].style.transform = "translateX(-100%) perspective(1000px) rotateY(-180deg) scaleX(-1)";
        });
        currentPage += 2;
        updatePageNumber();
        window.setTimeout(function() {
            updateZIndexes();
        }, 300);
    }
    if (!leftbtn.classList.contains("active")) {
        leftbtn.classList.add("active");
        leftbtn.classList.add("active");
    }
    if (currentPage === 17) {
        rightbtn.classList.remove("active")
        rightbtn.classList.remove("active");
    }
}

function handleBackwardFlip() {
    if (currentPage === 3) {
        pageContainer.style.animation = "right-to-left-2 ease-out 1s 1 forwards";
    }
    if (currentPage === 17) {
        pageContainer.style.animation = "left-to-right-2 ease-out 1s 1 forwards";
    }
    const pages = document.querySelectorAll('.portfolio-page');
    const currentPageIndex = currentPage - 1;
    if (currentPageIndex > 0) {
        pages[currentPageIndex - 2].classList.add('flip-right-front');
        pages[currentPageIndex - 1].classList.add('flip-right-back');
        pages[currentPageIndex - 2].addEventListener('animationend', function() {
            pages[currentPageIndex - 2].classList.remove('flip-right-front');
            pages[currentPageIndex - 2].style.transform = "translateX(0) perspective(1000px) rotateY(0deg)";
        });
        pages[currentPageIndex - 1].addEventListener('animationend', function() {
            pages[currentPageIndex - 1].classList.remove('flip-right-back');
            pages[currentPageIndex - 1].style.transform = "translateX(0) perspective(1000px) rotateY(0deg) scaleX(-1)";
        });
        currentPage -= 2;
        updatePageNumber();
        window.setTimeout(function() {
            updateZIndexes();
        }, 300);
    }
    if (!rightbtn.classList.contains("active")) {
        rightbtn.classList.add("active");
        rightbtn.classList.add("active");
    }
    if (currentPage === 1) {
        leftbtn.classList.remove("active");
        leftbtn.classList.remove("active");
    }
}

function updatePageNumber() {
    const pageNumberElement = document.querySelector('.page-number');
    pageNumberElement.textContent = currentPage === 1 ? "1 of 16" : currentPage === 17 ? "16 of 16" : (currentPage - 1).toString() + "-" + currentPage.toString() + " of 16";
}

function updateZIndexes() {
    pages.forEach((page, index) => {
        page.style.zIndex = (currentPage - 1) > index ? index : 30 - (index - 1);
    });
}

/*
function handleForwardFlip() {
    if (currentPage !== 17) {
        portpages[currentPage - 1].style.animation = "flip-left-front ease 1s 1 forwards";
        portpages[currentPage].style.animation = "flip-left-back ease 1s 1 forwards";
        window.setTimeout(() => {
            portpages[currentPage - 1].style.zIndex = parseInt(portpages[currentPage - 1].style.zIndex, 10) - 1;
            portpages[currentPage].style.zIndex = parseInt(portpages[currentPage].style.zIndex, 10) + 1;
        }, 200);
        currentPage += 2;
    }
}
function handleBackwardFlip() {
    if (currentPage !== 1) {
        portpages[currentPage - 3].style.animation = "flip-right-front ease 1s 1 forwards";
        portpages[currentPage - 2].style.animation = "flip-right-back ease 1s 1 forwards";
        window.setTimeout(() => {
            portpages[currentPage - 3].style.zIndex = parseInt(portpages[currentPage - 2].style.zIndex, 10) + 1;
            portpages[currentPage - 2].style.zIndex = parseInt(portpages[currentPage - 1].style.zIndex, 10) - 1;
        }, 200);
        currentPage -= 2;
    }
}
*/

function adjustSize() {
    const screenWidth = window.innerWidth;
    const robotImages = document.querySelectorAll('.robot-container img');

    // Determine the size based on screen width
    let size = screenWidth < 601 ? 200 : 300;

    // Set the size to the images
    robotImages.forEach(img => {
      img.style.width = size + 'px';
      img.style.height = size + 'px';
    });
  }

  // Initial adjustment
  adjustSize();

  // Re-adjust on window resize
  window.addEventListener('resize', adjustSize);

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


