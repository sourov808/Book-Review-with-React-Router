const getStroedBook = () => {
const stroedBook = localStorage.getItem('book-read');
if(stroedBook){
    return JSON.parse(stroedBook);
}
return [];
}



const saveBookRead = bookId => {

    const stroedBook = getStroedBook();
    const exists = stroedBook.find(bookid => bookid === bookId);
    if(!exists){
        stroedBook.push(bookId);
        localStorage.setItem('book-read', JSON.stringify
            (stroedBook)
        )
    }
}

export {getStroedBook,saveBookRead}