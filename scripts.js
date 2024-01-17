class Book {
  constructor(bookID, bookName, bookAuthor, bookPages, bookImage, isRead) {
    this.bookId = bookID;
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
    this.bookPages = bookPages;
    this.bookImage = bookImage;
    this.isRead = isRead;
  }

  toggleReadStatus = () => {
    this.isRead = this.isRead ? false : true;
  }
}

class Library {
  constructor() { };

  static myLibrary = [];

  static addBookToLibrary = (newBook) => {
    this.myLibrary.push(newBook);
  }
}

const Librarian = (() => {
  const dialog = document.querySelector("dialog");
  const addBookButton =  document.querySelector(".add-book-button");
  const confirmButton = document.querySelector("input[type='submit']");

  const titleBook = document.getElementById("title");
  const authorBook = document.getElementById("author");
  const pagesBook = document.getElementById("pages");
  const imageBook = document.getElementById("image");
  const readBook = document.getElementById("read");
  const bookForm = document.getElementById("book-form");

  const booksContainer =  document.querySelector(".books-container");
  const readBookSelection =  document.querySelectorAll('.read-book-selection');
  const removeBookSelection = document.querySelectorAll('.remove-option');

  addBookButton.addEventListener("click", () => {
    dialog.showModal();
  });

  booksContainer.addEventListener("click", (event) => {
    const bookCard = event.target.closest('.card');
    const bookId = bookCard.dataset.id;
  
    if (event.target.classList.contains('read-book-selection')) {
      myLibrary[bookId].toggleReadStatus();
      toggleReadStatus(event.target);  
    } else if (event.target.classList.contains('remove-option')) {
        bookCard.remove();
  
        if (bookId !== undefined) {
          myLibrary.splice(bookId, 1);
        }
      }
    }
  );
  
  confirmButton.addEventListener("click", () => {
    if(bookForm.checkValidity()) {
      const newBook = new Book(
        generateId(),
        titleBook.value,
        authorBook.value,
        pagesBook.value,
        imageBook.value,
        readBook.checked
      );

      Library.addBookToLibrary(newBook);
      bookForm.reset();
      makeBookCard(newBook);
    }
  });

  const makeBookCard = (book) => {
    const card = document.createElement('div');
    const bookImg = document.createElement('img');
    const bookInfo = document.createElement('div');
    const bookInfoLeft = document.createElement('div');
    const bookInfoRight = document.createElement('div');
    const status = document.createElement('span');
    const numberPages = document.createElement('p');
    const pages = document.createElement('p');
    const author = document.createElement('p');
    const title = document.createElement('p')
    const hoverOptions = document.createElement('div');
    const readSelectButton = document.createElement('button');
    const removeOptionButton = document.createElement('button');
  
    card.classList.add('card');
    bookImg.classList.add('book-img');
    bookInfo.classList.add('book-info');
    bookInfoLeft.classList.add('left');
    numberPages.classList.add('number-pages');
    pages.classList.add('pages');
    bookInfoRight.classList.add('right');
    author.classList.add('author');
    title.classList.add('title');
    hoverOptions.classList.add('hover-options');
    readSelectButton.classList.add(book.bookRead ? 'read-select-true' : 'read-select-false');
    readSelectButton.classList.add('read-book-selection');
    removeOptionButton.classList.add('remove-option');
    
    card.dataset.id = book.bookId;
    bookImg.src = book.bookImage;
    book
    status.classList.add(book.bookRead ? 'status-true' : 'status-false');
    numberPages.textContent = book.bookPages;
    pages.textContent = 'pages';
    author.textContent = book.bookAuthor;
    title.textContent = book.bookName;
    readSelectButton.textContent = book.bookRead ? 'Read' : 'Not Read';
  
    removeOptionButton.textContent = 'Remove';
  
    card.appendChild(bookImg);
    card.appendChild(hoverOptions);
    card.appendChild(bookInfo);
    hoverOptions.appendChild(readSelectButton);
    hoverOptions.appendChild(removeOptionButton);
    bookInfo.appendChild(bookInfoLeft);
    bookInfo.appendChild(bookInfoRight);
    bookInfoLeft.appendChild(status);
    bookInfoLeft.appendChild(numberPages);
    bookInfoLeft.appendChild(pages);
    bookInfoRight.appendChild(title);
    bookInfoRight.appendChild(author);
    booksContainer.appendChild(card);
  }
  
})();

function generateId() {
  return Library.myLibrary.length;
}

function displayBooks() {
  makeBookCard(book);
}

function toggleReadStatus(element) {
  if (element.classList.contains('read-select-true')) {
    element.classList.remove('read-select-true');
    element.classList.add('read-select-false');
    element.textContent = 'Not Read';
    const spanStatus = document.querySelector('.status-true');
    spanStatus.classList.remove('status-true');
    spanStatus.classList.add('status-false');
  } else {
    element.classList.remove('read-select-false');
    element.classList.add('read-select-true');
    element.textContent = 'Read';
    const spanStatus = document.querySelector('.status-false');
    spanStatus.classList.remove('status-false');
    spanStatus.classList.add('status-true');
  }
}