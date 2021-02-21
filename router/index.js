const router = require("express").Router();

//load file router actor
const actor = require("./actor")

router.use("/actors",actor)

//load file router movie
const movie = require("./movie")

router.use("/movie",movie)

module.exports = router