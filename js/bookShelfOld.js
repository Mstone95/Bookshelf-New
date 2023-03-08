//bookshelf will have an array of books property
class BookShelf {
    //bookshelf has books
    constructor(booksArray) {
        this.books = booksArray
        this.favoriteBooks = []
    }
    //action to add books
    addABook(aBook) {
        this.books.push(aBook)
    }

    //make the bookshelf element
    render() {
        //create unordered list
        const bookShelfUL = document.createElement("ul")

        //set class name
        bookShelfUL.className = "bookCovers"

        //Create li element for each book
        const bookLis = this.books.map((addThisBook) => {
            return addThisBook.render()
        }
        )
        bookShelfUL.append(...bookLis)
        //listen for fav'ed event to add to fave'd books array
        bookShelfUL.addEventListener("faveEvent", (event) => {
            const favedBook = event.detail
            if (favedBook.faveOrNah) {
                this.favoriteBooks.push(favedBook)
                alert(favedBook.title + " has been added to favorites")
                alert(this.favoriteBooks.length)
            }
            else {
                alert(favedBook.title + " has been Removed from favorites")
                (this.favoriteBooks)
                const removedBooks = this.favoriteBooks.filter((theBook) => {
                    return theBook.title !== this.favoriteBooks.title
                })
                this.favoriteBooks = removedBooks
                alert(this.favoriteBooks.length)
            }
//could not get remove working
        })


        for (i = 0; i < this.books.length; i++) {
            const book = this.books[i]
            //Book renders itself, and is returned to be appended
            //through bookli into bookShelfUL
            const bookli = book.render()
            bookShelfUL.append(bookli)
        }
        return bookShelfUL
    }
}






