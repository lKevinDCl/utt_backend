const express = require('express')
const app = express()
const port = 8000;
const {firebaseAuth} = require ('./src/services/firebase/auth');
const routes = require('./src/routes');

app.use(express.json());
app.use (firebaseAuth);
routes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


/*
Estudiar patrones de diseño
*/