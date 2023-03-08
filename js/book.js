
let id = 1
let previewCreateOrEdit = document.querySelector(".previewCreateOrEdit")

//Book is a class that stores all the book information
export default class Book {

    constructor(author, language, subject, title, comment, faveOrNah) {
        this.author = author
        this.language = language
        this.subject = subject
        this.title = title
        this.faveOrNah = this.faveOrNah
        this.comment = comment
        this.id = id.toString()
        id++
    }

   static makeFavorite() {
        this.faveOrNah = !this.faveOrNah
        return this.faveOrNah


    }

    render() {
        //document.createElement does not attach the new element to DOM
        //We will have to do that manually where the render is called
        const renderedBook = document.createElement("li")
        renderedBook.id = this.id
        //create button and title element for each book
        renderedBook.innerHTML = `<button class="faveButton">★</button>
        <button class="editButton">✐</button>
        <p class="bookTitle">${this.title}</p>
        `
        if (this.comment !== undefined && this.comment !== "") {
            renderedBook.innerHTML = `<button class="faveButton">★</button>
            <button class="editButton">✐</button>
            <span class="commentNotifier">☎︎</span>
                <p class="bookTitle">${this.title}</p>
                `
        }

        //set class name for CSS
        renderedBook.className = "bookCover"
        return renderedBook

    }

    renderPreview() {
        //set the right side label correctly
        previewCreateOrEdit.innerHTML = `<h1>Preview</h1>`
        //create elements for each piece of book information
        const renderedBook = document.createElement("div")

        //check if the comment exists
        let commentValue = "NONE"
        if (this.comment === undefined || this.comment === "") {
            commentValue = "NONE"
        }
        else {
            commentValue = this.comment
        }
       
        //supply the book's info, and give an accurate reading of the comment
        renderedBook.innerHTML = `<h1 class="title">${this.title}</h1>
        <h2>Author: ${this.author}</h2>
        <h3>Subject: ${this.subject.join(",")}</h3>
        <h3>Language: ${this.language}</h3>
        <h3>Comment: ${commentValue}</h3>
        <h3>ID# ${this.id}</h3>
        `

        return renderedBook
    }

    static renderBookInput(book) {
        //create text boxes to fill out book information
        const renderedBookInput = document.createElement("div")
        renderedBookInput.className = 'bookInput'
        if (book === undefined) { //If we are making a new book, no book will be passed in

            //set the right side label correctly
            previewCreateOrEdit.innerHTML = `<h1>Create Book</h1>`

            //create elements for inputs for each piece of book information
            //html for clicking the add a book button
            renderedBookInput.innerHTML = `
            <input class="titleInput" placeholder="Title"><br>
            <input class="authorInput" placeholder="Author"><br>
            <input class="subjectsInput" placeholder="Subject(s). Separate with commas"><br>
            <input class="languageInput" placeholder="Language"><br>
            <input class="commentInput" placeholder="Comments. Max 280 characters" maxlength="280"><br>
            <button class="enter">Enter</button>            
            `
            return renderedBookInput
        }
        else { //if we are clicking the edit button on an existing book, that book will be passed in
            console.log(book)
            let commentInputValue = "NONE"
            if (book.comment) {
                commentInputValue = book.comment
            }
            else {
                commentInputValue = "NONE"
            }
            //set the right side label correctly
            previewCreateOrEdit.innerHTML = `<h1>Edit Book</h1>`

            //html for clicking an existing book edit button
            renderedBookInput.innerHTML = `
            <input class="titleInput" value="${book.title}"><br>
            <input class="authorInput" value="${book.author}"><br>
            <input class="subjectsInput" value="${book.subject.join(",")}"><br>
            <input class="languageInput" value="${book.language}"><br>
            <input class="commentInput" value="${commentInputValue}" maxlength="280"><br>
            <button class="update">Update</button>            
            `
            return renderedBookInput

        }
    }

}


