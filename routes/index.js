const express = require("express");
const router = express.Router();

const { ReadAll, ReadOne, Create, Update, Delete } = require("../controllers");

router.get("/", ReadAll);
router.get("/:id", ReadOne);
router.post("/", Create);
router.put("/:id", Update);
router.delete("/:id", Delete);

module.exports = router;
