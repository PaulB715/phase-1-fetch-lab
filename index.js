function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(data => renderBooks(data))
    .catch(error => console.log(error));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}