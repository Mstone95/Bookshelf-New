import Book from './js/book.js';
import BookShelf from './js/bookshelf.js';
import bookData from './js/bookData.js';




// There is a small known bug that I could not yet fix. 
// The list of books gets a window worth of space put above it when editing a book. 
// It makes the books scroll out of sight, but they are there, with edits properly working otherwise. 







//Takes bookshelf instance rendered and puts in book shelf section
function appendBookShelf(bookShelfToRender) {
    const bookShelfSection = document.getElementsByClassName("bookShelf")[0]
    bookShelfSection.innerHTML = ""
    const bookShelfUL = bookShelfToRender.render()
   
}

//create the bookshelf
const bookShelf1 = new BookShelf([])


// iterate through bookData array to get each book's author, language, subject(s), and title
// every iteration makes a new book and adds it to the book shelf
bookData.forEach(bookEle => {
    const book = new Book(
        bookEle.author,
        bookEle.language,
        bookEle.subject,
        bookEle.title
    )
    bookShelf1.addABook(book)
});

 //set the right side label default
 const previewCreateOrEdit = document.querySelector(".previewCreateOrEdit")
 previewCreateOrEdit.innerHTML = `<h1>Preview</h1>`



 //check if add book button is clicked
const addABookButton = document.querySelector(".addBookBtn")
addABookButton.addEventListener("click", () => { 
    console.log("clicked")

    const bookInput = Book.renderBookInput()
    const enterButton = bookInput.querySelector(".enter")
    enterButton.addEventListener("click", () => {
        console.log(enterButton)
        //when enter button is clicked:
        //create new book with the typed in attributes
        const newBook = new Book(
            bookInput.querySelector(".authorInput").value,
            bookInput.querySelector(".languageInput").value,
            bookInput.querySelector(".subjectsInput").value.split(","),
            bookInput.querySelector(".titleInput").value,
            bookInput.querySelector(".commentInput").value
        )
//add new book to shelf, alert that its been added, and blank the input fields. Then append changes 
        bookShelf1.addABook(newBook)
        alert(bookInput.querySelector(".titleInput").value + " has been added to the book shelf.")
        bookInput.querySelector(".titleInput").value = ""
        bookInput.querySelector(".authorInput").value = ""
        bookInput.querySelector(".languageInput").value = ""
        bookInput.querySelector(".subjectsInput").value = ""
        bookInput.querySelector(".commentInput").value = ""
        appendBookShelf(bookShelf1)
    })
    const previewSection = document  //set bookPreviewSection to bookInput's HTML
        .getElementsByClassName("bookPreviewSection")
    [0]

    previewSection.innerHTML = ""
    previewSection.appendChild(bookInput)

})


appendBookShelf(bookShelf1)



