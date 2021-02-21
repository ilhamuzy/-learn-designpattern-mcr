const router = require("express").Router();

//load controller
const actorController = require("../controllers/actorController");

//set endpoint url
router.get("/actor", actorController.index)
router.get("/actor/:id", actorController.show)
router.post("/actor", actorController.create)
router.put("/actor/:id", actorController.update)
router.delete("/actor/:id", actorController.delete)

module.exports = router