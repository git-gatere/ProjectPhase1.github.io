
document.addEventListener('DOMContentLoaded',() => {

    fetchBooks()


const form = document.querySelector('#searchform')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const input = document.querySelector('#search')
    if (input.value) {fetchBooks(input.value)}
    else {
        fetchBooks()
    }
})
})

function fetchBooks(searched = '') {
    fetch(`http://localhost:3000/books`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then((res) => res.json())
    .then((book) => {
        if (searched) {

            document.querySelector('#book').innerHTML=''


            book.filter((book1) => book1.title.includes(searched))
            .forEach((book1) => renderBooks(book1))
        } else {
            book.forEach((book1) => renderBooks(book1));
        }
    })
    
}

function renderBooks(book1) {
    const booksContainer = document.querySelector('#book')
const parentDiv = document.createElement('div')
parentDiv.classList.add('card')
    
const image = document.createElement('img')
image.classList.add('card-img-top', 'mt-2')
image.height = 200;
image.src = book1.imageLink
image.alt = book1.title
parentDiv.appendChild(image)


const cardBody = document.createElement('div')
cardBody.classList.add('card-body')

const title = document.createElement('h5')
title.className = 'card-title'
title.innerText = book1.title


const author = document.createElement('p')
author.className = 'card-text'
author.innerText = book1.author


const button = document.createElement('button')
button.classList.add('btn','btn-primary')
button.innerText = 'Add'

const buttonFunction = button.addEventListener('click', reaction)
function reaction() {
    if (button.innerText = 'Add') {
        button.innerText = 'Added'
    } else {
        button.innerText = 'Add'
    }
}
const language = document.createElement('p')
language.className = 'card-info'
language.innerText = book1.language

cardBody.append(title, author, language, button )
parentDiv.appendChild(cardBody)

booksContainer.appendChild(parentDiv);
}