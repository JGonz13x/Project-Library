const addBookElement = document.querySelector(".add-book");
const addBookDialogElement = document.querySelector(".add-book-dialog");
const closeDialogElement = document.querySelector(".close-dialog");

addBookElement.addEventListener("click", () => {
  addBookDialogElement.showModal();
  console.log("clik");
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
