require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

const keys = require('./config/keys');
const routes = require('./routes');
const socket = require('./socket');

const { port } = keys;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: true,
  })
);
app.use(cors());

// MongoDB Connection Using Mongoose
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(chalk.green('✓ Connected to MongoDB Atlas'));
  })
  .catch((err) => {
    console.error(chalk.red('✗ MongoDB connection error:'), err);
  });

// Passport configuration (for authentication)
require('./config/passport')(app);

// Application routes
app.use(routes);

// Start the server
const server = app.listen(port, () => {
  console.log(
    `${chalk.green('✓')} ${chalk.blue(
      `Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
    )}`
  );
});

// Socket setup
socket(server);
