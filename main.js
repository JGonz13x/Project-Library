import { addBookToLibrary, checkValue } from "./data/books";

const addBookElement = document.querySelector(".add-book");
const addBookDialogElement = document.querySelector(".add-book-dialog");
const closeDialogElement = document.querySelector(".close-dialog");
const addDialogElement = document.querySelector(".add-dialog");

addBookElement.addEventListener("click", () => {
  addBookDialogElement.showModal();
});

closeDialogElement.addEventListener("click", () => {
  addBookDialogElement.close();
});

addBookDialogElement.addEventListener("click", (e) => {
  const dialogDimensions = addBookDialogElement.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    addBookDialogElement.close();
  }
});

addDialogElement.addEventListener("click", (e) => {
  e.preventDefault();
  addBook();
});

function addBook() {
  if (checkValue()) {
    addBookToLibrary();
    addBookDialogElement.close();
  }
}

addBookDialogElement.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addBook();
  }
});
