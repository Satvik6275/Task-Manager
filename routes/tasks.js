const express = require('express')
const router = express.Router()
const {
    getAllTasks,
    getTask,
    postTasks,
    updateTasks,
    deleteTasks
} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(postTasks)
router.route('/:id').get(getTask).patch(updateTasks).delete(deleteTasks)


module.exports = router