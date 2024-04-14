const express = require('express');
const app = express();

app.use(express.static('static_files'));
app.listen(3000, ()=> {
    console.log('Server Port 3000');
})