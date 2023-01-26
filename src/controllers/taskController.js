const { model } = require('mongoose');
const taskModel = require('../models/taskModel')


const createTask = async function (req, res) {
    try {
        let data = req.body;
        const task = await taskModel.create(data)
        return res.status(201).send({status:true,message:"created todo list"})

    }catch(err){
        return res.status(500).send({ status: false, message: err.message });
    }
  };

  module.exports = {createTask}