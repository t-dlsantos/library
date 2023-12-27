const dialog = document.querySelector("dialog");
const addBookButton = document.querySelector(".add-book-button");
const closeButton = document.querySelector("dialog button");
const confirmButton = document.querySelector("input[type='submit']")
const booksContainer = document.querySelector(".books-container");

const titleBook = document.getElementById("title");
const authorBook = document.getElementById("author");
const pagesBook = document.getElementById("pages");
const imageBook = document.getElementById("image");
const readBook = document.getElementById("read");
const bookForm = document.getElementById("book-form");

const myLibrary = [];

function Book(bookName, bookAuthor, bookPages, bookImage, bookRead) {
  this.bookName = bookName;
  this.bookAuthor = bookAuthor;
  this.bookPages = bookPages;
  this.bookImage = bookImage;
  this.bookRead = bookRead;
}

function addBookToLibrary() {
  const newBook = new Book(
    titleBook.value,
    authorBook.value,
    pagesBook.value,
    imageBook.value,
    readBook.checked
  );
  
  myLibrary.push(newBook);
  bookForm.reset();
  displayBooks();
}

addBookButton.addEventListener("click", (e) => {
  dialog.showModal();
});

window.addEventListener('load', () => {
  const newBook = new Book(
    "Harry Potter and the Philosopher's Stone",
    "J.K. Rowling",
    305,
    "https://m.media-amazon.com/images/I/51uGVzNXipL._SY445_SX342_.jpg",
    true
  );
  
  myLibrary.push(newBook);
  displayBooks();
})

function displayBooks() {
  myLibrary.forEach((book) => {
    makeBookCard(book); 
  })
}

function makeBookCard(book) {
  const card = document.createElement('div');
  const bookImg = document.createElement('img');
  const bookInfo = document.createElement('div');
  const bookInfoLeft = document.createElement('div');
  const bookInfoRight = document.createElement('div');
  const status = document.createElement('sapn');
  const numberPages = document.createElement('p');
  const pages = document.createElement('p');
  const author = document.createElement('p');
  const title = document.createElement('p')

  card.classList.add('card');
  bookImg.classList.add('book-img');
  bookInfo.classList.add('book-info');
  bookInfoLeft.classList.add('left');
  numberPages.classList.add('number-pages');
  pages.classList.add('pages');
  bookInfoRight.classList.add('right');
  author.classList.add('author');
  title.classList.add('title');

  bookImg.src = 'https://m.media-amazon.com/images/I/51uGVzNXipL._SY445_SX342_.jpg';
  status.classList.add(book.bookRead ? 'status-true' : 'status-false');
  numberPages.textContent = book.bookPages;
  pages.textContent = 'pages';
  author.textContent = book.bookAuthor;
  title.textContent = book.bookName;
  console.log(book.bookTitle);

  card.appendChild(bookImg);
  card.appendChild(bookInfo);
  bookInfo.appendChild(bookInfoLeft);
  bookInfo.appendChild(bookInfoRight);
  bookInfoLeft.appendChild(status);
  bookInfoLeft.appendChild(numberPages);
  bookInfoLeft.appendChild(pages);
  bookInfoRight.appendChild(title);
  bookInfoRight.appendChild(author);
  booksContainer.appendChild(card);
}

confirmButton.addEventListener("click", (e) => {
  if(bookForm.checkValidity()) {
    addBookToLibrary();

    setTimeout(()=> {
      dialog.close();
    }, 100);
  }
})