const express = require("express");
const { getAllData, postData, insertManyData, deleteAll, deleteById, updateInterest } = require("../controllers/newsControllers");
const router = express.Router();

router.route("/all")
    .get(getAllData)
    .post(postData)

router.route("/all/:id")
    .delete(deleteById)
    .patch(updateInterest)


router.route("/many").post(insertManyData);
router.route("/deleteall").delete(deleteAll);


module.exports = router;