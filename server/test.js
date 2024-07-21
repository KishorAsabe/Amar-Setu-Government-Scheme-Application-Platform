const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust path as necessary

async function updateIndexes() {
    try {
        await mongoose.connect('mongodb+srv://kishorasabe2020:eux7VnwoypcvhI1j@cluster0.tpu9uxx.mongodb.net/Amar-Setu', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await User.syncIndexes();
        console.log('Indexes updated successfully.');
    } catch (error) {
        console.error('Error updating indexes:', error);
    } finally {
        mongoose.connection.close();
    }
}

updateIndexes();
