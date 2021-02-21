const router = require("express").Router();

//load controller
const movieController = require("../controllers/movieController");

//set endpoint url
router.get("/movie", movieController.index)
router.get("/movie/:id", movieController.show)
router.post("/movie", movieController.create)
router.put("/movie/:id", actorController.update)
router.delete("/movie/:id", movieController.delete)

module.exports = router