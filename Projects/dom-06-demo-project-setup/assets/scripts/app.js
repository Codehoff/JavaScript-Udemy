const addMoviewModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");

const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
}

startAddMovieButton.addEventListener("click", () => {
    addMoviewModal.classList.toggle("visible");
    toggleBackdrop();
});

