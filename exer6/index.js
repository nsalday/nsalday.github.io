import express from 'express';
import router from './router.js';   // import the router function
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router(app);

app.listen(3000);