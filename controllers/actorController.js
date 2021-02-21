//load models
const {Actor} = require("../models")

module.exports = {
    index: (req,res)=> {
        Actor.findAll()
        .then(result => {
            res.status(200).json({
                status: "succesfull",
                data: result
            })
        })
    },
    show: (req,res) => {
        Actor.findOne({
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
        const { first_name, last_name} = req.body
        Actor.create({
            first_name: first_name,
            last_name: last_name
        })
        .then(() => {
            res.status(201).json({
                status: "successful",
                message: "Create data actor success !"
            })
        })
    },
    update: (req, res)=> {
        const {first_name, last_name} = req.body
        Actor.update({
            first_name: first_name,
            last_name: last_name
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
        Actor.destroy({
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