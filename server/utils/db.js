require('dotenv').config();
const chalk = require('chalk');
const mongoose = require('mongoose');

const keys = require('../config/keys');
const { database } = keys;

const setupDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(database.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log(`${chalk.green('✓')} ${chalk.blue('MongoDB Connected!')}`);
  } catch (error) {
    console.error(
      `${chalk.red('✗')} ${chalk.yellow('MongoDB connection error:')} ${chalk.red(error.message)}`
    );
    process.exit(1); // Exit process with failure
  }
};

module.exports = setupDB;
