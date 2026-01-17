const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Project = require('../models/Project');

// @route   POST api/projects (Create Project)
router.post('/', auth, async (req, res) => {
    try {
        const newProject = new Project({
            name: req.body.name,
            user: req.user.id
        });
        const project = await newProject.save();
        res.json(project);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   GET api/projects (Get all projects of a user)
router.get('/', auth, async (req, res) => {
    try {
        const projects = await Project.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;