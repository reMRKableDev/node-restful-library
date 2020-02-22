const { books } = require("../data/library");
module.exports = {
  isBookValid: book => {
    if (typeof book !== "object") return false;
    if (!book.title) return false;
    if (!book.author) return false;
    return true;
  },

  findBook: req => {
    return books.find(book => book.id === req.params.id);
  }
};
