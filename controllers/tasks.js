const Task = require('../models/Tasks')
const asyncWrapper = require('../middlewares/async-wrapper')


const getAllTasks = asyncWrapper(async (req,res)=>{
    const tasks = await Task.find({})
    res.status(200).json({tasks})
})

const getTask = asyncWrapper(async (req,res)=>{

    const taskID = req.params.id
    const task = await Task.findOne({_id: taskID})
    if(!task){
        res.status(404).json({msg: 'not found'})
    }
    res.status(200).json({task})
})
const postTasks = asyncWrapper(async (req,res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task})   
})


const deleteTasks = asyncWrapper(async (req,res)=>{
    const taskID = req.params.id
    const task = await Task.findOneAndDelete({_id: taskID})
    if(!task){
        res.status(404).json({msg: 'not found'})
    }
    res.status(200).json({task})
})

const updateTasks = asyncWrapper(async (req,res)=>{   
    const taskID = req.params.id
    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
        new: true,
        runValidators: true
    })
    if(!task){
        res.status(404).json({msg: "no object found"})
    }
    res.status(200).json({task})
})


module.exports = {
    getAllTasks,
    getTask,
    postTasks,
    updateTasks,
    deleteTasks
}