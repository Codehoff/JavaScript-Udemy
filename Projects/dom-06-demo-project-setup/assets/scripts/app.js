const addMoviewModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");


startAddMovieButton.addEventListener("click", () => {
    addMoviewModal.classList.toggle("visible");
});

