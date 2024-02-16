const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET home page
router.get('/', (req, res) => {
    res.render('index');
});

// POST form data
router.post('/add-user', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.send('User added successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});




module.exports = router;
