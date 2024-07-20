
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.createAdminUser = async (req, res) => {
    console.log('Received request to create admin user');
    const { email, password, accountType, secretKey } = req.body;

    console.log('Request Body:', req.body);

    
    if (secretKey && secretKey === process.env.SECRET_KEY) {
        console.log('Secret key is valid');

        try {
            // Check if the admin user already exists
            let user = await User.findOne({ email });
            if (user) {
                console.log('Admin user already exists');
                return res.status(400).json({ message: 'Admin user already exists' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log('Password hashed successfully');

            // Create the admin user
            user = new User({
                email,
                password: hashedPassword,
                accountType,
            });

            await user.save();
            console.log('Admin user created successfully');

            // Generate JWT token
            const token = jwt.sign(
                { id: user._id, email: user.email, accountType: user.accountType },
                process.env.JWT_SECRET,
                { expiresIn: '1h' } // Token expires in 1 hour
            );

            res.status(201).json({
                message: 'Admin user created successfully',
                token: token // Include token in response
            });
        } catch (error) {
            console.error('Error creating admin user:', error);
            res.status(500).json({ message: 'Error creating admin user', error });
        }
    } else {
        console.log('Invalid secret key');
        res.status(403).json({ message: 'Invalid secret key' });
    }
};
