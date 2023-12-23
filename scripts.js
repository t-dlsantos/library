const dialog = document.querySelector("dialog");
const addBookButton = document.querySelector(".add-book-button");
const closeButton = document.querySelector("dialog button");

addBookButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    favDialog.close(selectEl.value);
});