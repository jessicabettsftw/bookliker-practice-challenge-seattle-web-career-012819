document.addEventListener("DOMContentLoaded", function() {});

const booksURL = 'http://localhost:3000/books'

let list = document.getElementById('list');

function getBooks(list){
  fetch(booksURL)
    .then(data => data.json())
    .then(jsoned => {
      jsoned.forEach(book => {
        addBook(book, list);
      })
    })
}

function addBook(book, list){
  let li = document.createElement("li")
  li.textContent = book.title

  let button = document.createElement("button")
  button.addEventListener('click', () => {
    let contentArea = document.getElementById("show-panel")
    renderBook(book, contentArea)
  })

  li.appendChild(button)
  list.appendChild(li)
}

function renderBook(book, div){
  div.innerHTML = ''
  let title = document.createElement("h1")
  title.textContent = book.title

  let img = document.createElement("img")
  img.src = book.img_url

  let description = document.createElement("p")
  description.textContent = book.description

  let button = document.createElement('button')
  button.textContent = 'Read Book'
  button.addEventListener('click', () => {
    displayUsers();
  })

  let users = document.createElement("div")
  users.id = 'users'
  users.textContent = 'test'
  users.className = 'hidden'

  div.appendChild(title);
  div.appendChild(img);
  div.appendChild(description);
  div.appendChild(button);
  div.appendChild(users)

}


function displayUsers(){

}


getBooks(list);
