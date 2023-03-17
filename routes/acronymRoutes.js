const express = require("express");
const router = express.Router();
const {
    getAcronym,
    createAcronym,
    getAcronymById,
    updateAcronymById,
    deleteAcronymById,
} = require("../controllers/acronymControllers");

router.route("/").get(getAcronym).post(createAcronym);
router
    .route("/:acronymID")
    .get(getAcronymById)
    .put(updateAcronymById)
    .delete(deleteAcronymById);

module.exports = router;
