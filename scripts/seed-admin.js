const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

async function seedAdmin() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const password = 'Admin@123';
    const hashedPassword = await bcrypt.hash(password, 12);

    // Update directly without model hooks
    const result = await mongoose.connection.db.collection('users').updateOne(
      { email: 'inzamulhaque1002@gmail.com' },
      {
        $set: {
          name: 'Admin',
          password: hashedPassword,
          role: 'superadmin',
          authProvider: 'credentials',
          lastLogin: new Date(),
        },
        $setOnInsert: {
          email: 'inzamulhaque1002@gmail.com',
          createdAt: new Date(),
        },
      },
      { upsert: true }
    );

    console.log('Admin user updated:', result.modifiedCount || result.upsertedCount);
    console.log('\n=== Admin Credentials ===');
    console.log('Email: inzamulhaque1002@gmail.com');
    console.log('Password: Admin@123');
    console.log('=========================\n');

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

seedAdmin();
