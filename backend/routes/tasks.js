const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Task = require('../models/Task');

// Get stats for Analytics
router.get('/stats', auth, async (req, res) => {
    try {
        const Project = require('../models/Project');
        const projects = await Project.find({ user: req.user.id });
        const projectIds = projects.map(p => p._id);

        const stats = {
            total: await Task.countDocuments({ project: { $in: projectIds } }),
            done: await Task.countDocuments({ project: { $in: projectIds }, status: 'Done' }),
            doing: await Task.countDocuments({ project: { $in: projectIds }, status: 'Doing' }),
            todo: await Task.countDocuments({ project: { $in: projectIds }, status: 'Todo' })
        };
        res.json(stats);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Get tasks for a project
router.get('/:projectId', auth, async (req, res) => {
    try {
        const tasks = await Task.find({ project: req.params.projectId });
        res.json(tasks);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Create task
router.post('/', auth, async (req, res) => {
    try {
        const { title, project, status, priority } = req.body;
        const newTask = new Task({ title, project, status, priority });
        const task = await newTask.save();
        res.json(task);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Update task status
router.put('/:id', auth, async (req, res) => {
    try {
        const { status } = req.body;
        let task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ msg: 'Task not found' });
        task.status = status;
        await task.save();
        res.json(task);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;