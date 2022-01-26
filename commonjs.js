let menubar = document.getElementById(`menubar`);
let menuBtn = document.getElementById(`menu`);
let firstclick = false;

menuBtn.addEventListener(`click`, () => {
    if (firstclick) {
        menubar.style.display = "none";
        firstclick = false;
    }
    else {
        menubar.style.display = "flex";
        firstclick = true;
    }
})