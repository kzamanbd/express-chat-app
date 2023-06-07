const express = require('express');

const router = express.Router();
const User = require('./models/user');

const authRoutes = require('./controllers/auth.controller');
const chatRoutes = require('./controllers/chat.controller');

router.get('/', async (req, res) => {
    res.status(200).json({
        title: 'Express Testing',
        message: 'The app is working properly!',
        users: 'https://express-vercel-kzaman.vercel.app/users'
    });
});
router.get('/users', async (req, res) => {
    try {
        const docs = await User.find({}).limit(100).exec();

        res.status(200).json({
            success: true,
            message: 'Users fetched successfully',
            users: docs
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: err
        });
    }
});
router.use('/api/auth', authRoutes);
router.use('/api/chat', chatRoutes);

module.exports = router;
