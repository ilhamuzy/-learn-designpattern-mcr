//load models
const {Movie} = require("../models")

module.exports = {
    index: (req, res)=> {
        Movie.findAll()
        .then(result => {
            res.status(200).json({
                status: "succesfull",
                data: result
            })
        })
    },
    show: (req,res) => {
        Movie.findOne({
            where: {id: Number(req.params.id)}
        })
        .then(result => {
            if (result !== null){
                res.status(200).json({
                    status: "succesfull",
                    data: result
                })
            } else {
                res.status(200).json({
                    status: "succesfull",
                    message: "Data not found !",
                    data: result
                })
            }
        })
    },
    create: (req,res)=> {
        const { title, desc, genre, year} = req.body
        Movie.create({
            title: title,
            desc: desc,
            genre: genre,
            year: year
        })
        .then(() => {
            res.status(201).json({
                status: "successful",
                message: "Create data movie success !"
            })
        })
    },
    update: (req, res)=> {
        const {title, desc, genre, year} = req.body
        Movie.create({
            title: title,
            desc: desc,
            genre: genre,
            year: year
        },{
            where: {id: Number(req.params.id)}
        })
        .then(()=>{
            res.status(201).json({
                status: "successful",
                message: "Update data actor success"
            })
        })
    },
    delete: (req,res)=> {
        Movie.destroy({
            where: {id:Number (req.params.id)}
        })
        .then(()=> {
            res.status(200).json ({
                status: "successful",
                message: "Data actor has been deleted!"
            })
        })
    }
}