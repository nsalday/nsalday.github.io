// Importing the express framework
import express from 'express';

// Importing the router function from a separate file named router.js
import router from './router.js';

// Creating an instance of the Express application
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

router(app);

// Starting the server and listening on port 3000
app.listen(3000, () => console.log(`Server running on port ${3000}`));