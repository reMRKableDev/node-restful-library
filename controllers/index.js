const { v4: uuidv4 } = require("uuid");
const { books } = require("../data/library");
const { isBookValid, findBook } = require("../helpers/helperFunctions");
const {
  statusOK,
  statusModified,
  statusNotFound,
  statusBadRequest,
} = require("../helpers/statusHelperFunctions");

module.exports = {
  Create: (req, res) => {
    const newBook = req.body;
    isBookValid(newBook) ? addNewBook(newBook, res) : statusBadRequest(res);
  },

  ReadAll: (req, res) => {
    statusOK(res, books);
  },

  ReadOne: (req, res) => {
    const specificBook = findBook(req);
    specificBook ? statusOK(res, specificBook) : statusNotFound(res);
  },

  Update: (req, res) => {
    const updatedBook = req.body;
    isBookValid(updatedBook)
      ? updateBook(req, res, updatedBook)
      : statusBadRequest(res);
  },

  Delete: (req, res) => {
    const bookToDelete = findBook(req);
    !bookToDelete ? statusNotFound(res) : deleteBook(bookToDelete, res);
  },
};

/* Controller Helpers */

function deleteBook(bookToDelete, res) {
  books.splice(books.indexOf(bookToDelete), 1);
  statusModified(res, "delete");
}

function updateBook(req, res, updatedBook) {
  const existingBook = findBook(req);
  if (!existingBook) {
    statusNotFound(res);
  } else {
    existingBook.title = updatedBook.title;
    existingBook.author = updatedBook.author;
    statusModified(res, "update");
  }
}

function addNewBook(newBook, res) {
  newBook.id = uuidv4();
  books.push(newBook);
  statusModified(res, "create");
}
