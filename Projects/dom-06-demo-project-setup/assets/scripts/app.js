const addMoviewModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelMovieAddButton = addMoviewModal.querySelector(".btn--passive");


const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
}

startAddMovieButton.addEventListener("click", () => {
    addMoviewModal.classList.toggle("visible");
    toggleBackdrop();
});

const backdropClickHandler = () => {
    toggleBackdrop();
    addMoviewModal.classList.toggle("visible");
};

backdrop.addEventListener("click", backdropClickHandler);

const cancelAddMovie = () => {
    addMoviewModal.classList.toggle("visible");
    toggleBackdrop();
};

cancelMovieAddButton.addEventListener("click", cancelAddMovie)

