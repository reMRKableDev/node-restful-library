module.exports = {
  statusOK: (res, book) => {
    res
      .status(200)
      .json(book)
      .end();
  },

  statusNotFound: res => {
    res.status(404).end("No such book has been found");
  },

  statusModified: (res, actionTaken) => {
    switch (actionTaken) {
      case "create":
        res.status(201).end("New Book has been added");
        break;
      case "update":
        res.status(201).end("Book has been updated");
        break;
      case "delete":
        res.status(200).end("Book has been deleted");
        break;
    }
  },

  statusBadRequest: res => {
    res.status(400).end("Not a valid book");
  }
};
