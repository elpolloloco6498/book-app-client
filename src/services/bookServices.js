const API_ENDPOINT = "https://book-management-website.herokuapp.com/books/"

async function getAllBooks() {
    const res = await fetch(API_ENDPOINT)
    const listBooks = await res.json()
    return listBooks
}

async function addBook(bookData) {

    var formdata = new FormData();
    formdata.append("name", bookData.name);
    formdata.append("author", bookData.author);
    formdata.append("date", bookData.date);
    formdata.append("genre", bookData.genre);
    formdata.append("bookImg", bookData.bookImgFile);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    const res = await fetch(API_ENDPOINT, requestOptions)

    const bookAdded = res.json()
    return bookAdded
}

async function updateBook(bookData, id) {
    var formdata = new FormData();
    formdata.append("name", bookData.name);
    formdata.append("author", bookData.author);
    formdata.append("date", bookData.date);
    formdata.append("genre", bookData.genre);
    formdata.append("bookImg", bookData.bookImgFile);

    var requestOptions = {
        method: 'PUT',
        body: formdata,
        redirect: 'follow'
    };

    const res = await fetch(API_ENDPOINT + id, requestOptions)

    const bookUpdated = res.json()
    return bookUpdated
}

async function deleteBook(id) {
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    const res = await fetch(API_ENDPOINT + id, requestOptions)
    return res.json()
}


export{getAllBooks, addBook, updateBook, deleteBook}