import Book from "./book.js"

let editButtonClicked = false
export default class Bookshelf {
    //bookshelf will have an array of books property
    //bookshelf has books
    constructor(booksArray) {
        this.books = booksArray
        this.favoriteBooks = []
    }

    //action to add books
    addABook(aBook) {
        this.books.push(aBook)
    }

    addFavorite(book) {
        this.favoriteBooks.push(book)
    }

    removeFavorite(book) {
        this.favoriteBooks = this.favoriteBooks.filter((theBook) => theBook !== book)
        
    }


    render() {
        console.log(this.books)
        //create unordered list
        const bookShelfUL = document.createElement("ul")
        bookShelfUL.className = "bookCovers"

        //Create li element for each book
        this.books.map((book) => {
            const bookLi = book.render()

            //listen for clicks
            const bookTitle = bookLi.querySelector(".bookTitle")
            bookTitle.addEventListener("click", () => {
                //book = bookshelf1.books[i]
                //find book that matches book that was clicked, using title
                for (const book of this.books) {
                    if (book.id === bookLi.id) {
                        //bookPreview gets entire block of HTML from renderPreview
                        const bookPreview = book.renderPreview()
                        document  //set bookPreviewSection to bookPreview's HTML
                            .getElementsByClassName("bookPreviewSection")
                        [0].innerHTML = bookPreview.innerHTML
                    }
                }
            })
            bookShelfUL.append(bookLi)

            // make favorite button clickable
            const favoriteButton = bookLi.querySelector(".faveButton")
            favoriteButton.addEventListener("click", () => {

                //decide whether to add or remove the book from favorites
                if (!this.favoriteBooks.includes(book)) {
                    this.addFavorite(book)
                    favoriteButton.className = "favorite"
                    console.log(this.favoriteBooks)
                }
                else {
                    this.removeFavorite(book)
                    favoriteButton.className = "notFavorite"
                    console.log(this.favoriteBooks)
                }
                console.log(this.favoriteBooks.length)
                alert("You have " + this.favoriteBooks.length + " books in your favorites")
                if (this.favoriteBooks.length <= 0) {
                    alert("You should probaby learn to read. ")
                }
            })

            // make edit button clickable
            const editButton = bookLi.querySelector(".editButton")
            editButton.addEventListener("click", () => {

                //get the book info of the clicked book and prefill the text boxes that come up when creating a new book
                const bookInput = Book.renderBookInput(book)
                const previewSection = document  //set bookPreviewSection to bookInput's HTML
                    .getElementsByClassName("bookPreviewSection")[0]
                previewSection.innerHTML = ""
                previewSection.appendChild(bookInput)

                const updateButton = bookInput.querySelector(".update")
                updateButton.addEventListener("click", () => {
                    const newBookTitle = previewSection.querySelector(".titleInput")
                    const newBookAuthor = previewSection.querySelector(".authorInput")
                    const newBookLanguage = previewSection.querySelector(".languageInput")
                    const newBookSubject = previewSection.querySelector(".subjectsInput")
                    const newBookComment = previewSection.querySelector(".commentInput")

                    //when update button is clicked:

                    console.log(newBookTitle.value)
                    console.log(newBookAuthor.value)
                    console.log(newBookLanguage.value)
                    console.log(newBookSubject.value)
                    console.log(newBookComment.value)

                    //here changes the actual attributes of the book
                    book.title = newBookTitle.value
                    book.author = newBookAuthor.value
                    book.language = newBookLanguage.value
                    book.subject = newBookSubject.value.split(",")
                    book.comment = newBookComment.value

                    for (const boo of this.books) {
                        if (boo.id === bookLi.id) {
                            bookLi.innerHTML = `<button class="faveButton">★</button>
                            <button class="editButton">✐</button>
                            <span class="commentNotifier">☎︎</span>
                                <p class="bookTitle">${book.title}</p>
                                `
                                bookShelfUL.innerHTML = ``
                               this.render()
                        
                          console.log(document.querySelector(".leftSide"))
                        }
                    }
                
                })

            })

        })


        const bookShelfSection = document.getElementsByClassName("bookShelf")[0]
        bookShelfSection.append(bookShelfUL)


    }



}