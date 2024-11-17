const myLibrary = [];

let bookCard = "";

function Book(title, author, totalPages, pagesRead, status) {
  (this.id = title + author),
    (this.title = title),
    (this.author = author),
    (this.totalPages = totalPages),
    (this.pagesRead = pagesRead),
    (this.status = status);
}

export function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const totalPages = document.getElementById("total-pages").value;
  const pagesRead = document.getElementById("pages-read").value;

  let status;

  document.getElementsByName("status").forEach((radio) => {
    if (radio.checked) {
      status = radio.value;
    }
  });

  myLibrary.push(new Book(title, author, totalPages, pagesRead, status));
  createBookCardElement();
}

function createBookCardElement() {
  bookCard = "";
  myLibrary.forEach((book) => {
    bookCard += `<div class="content-card transition">
            <div class="main-card-content">
              <div class="content-title book-title bold">Title:</div>
              <div class="content-value book-title-name bold">${book.title}</div>
              <div class="content-title book-author bold">Author:</div>
              <div class="content-value book-author-name bold">${book.author}</div>
              <div class="content-title book-total-page bold">Total Page:</div>
              <div class="content-value book-total-page-amount bold">${book.totalPages}</div>
              <div class="content-title book-page-read bold">Page Read:</div>
              <div class="content-value book-page-read-amount bold">
                ${book.pagesRead}<svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                  class="decrease scale"
                >
                  <path d="M200-440v-80h560v80H200Z" /></svg
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                  class="increase scale"
                >
                  <path
                    d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
                  />
                </svg>
              </div>
              <div class="content-title book-status bold">Status:</div>
              <div
                class="content-value book-status-name bold scale transition ${book.status}"
              >
                ${book.status}
              </div>
            </div>
            <div class="content-option">
              
              <div class="remove bold scale transition" 
              data-remove=${book.title}${book.author}>Remove</div>
            </div>
          </div>`;
  });
  renderBookCard();
  resetValues();
}

function renderBookCard() {
  document.querySelector(".content-grid").innerHTML = bookCard;

  document.querySelectorAll(".remove").forEach((removeElement) => {
    removeElement.addEventListener("click", () => {
      const { remove } = removeElement.dataset;
      removeBook(remove);
    });
  });
}

function resetValues() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("total-pages").value = "";
  document.getElementById("pages-read").value = "";
}

export function checkValue() {
  if (
    document.getElementById("title").value &&
    document.getElementById("author").value &&
    document.getElementById("total-pages").value &&
    document.getElementById("pages-read").value
  ) {
    return true;
  } else {
    return false;
  }
}

function removeBook(remove) {
  myLibrary.forEach((book, index) => {
    if (book.id === remove) {
      myLibrary.splice(index, 1);
      createBookCardElement();
      console.log("hello");
    }
  });
}
