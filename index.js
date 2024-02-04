const express = require('express');
// const cp = require('cookie-parser');
// const cors = require('cors');
// const dy = require('body-parser');
const app = express();
const PORT = 800 // process.env.PORT || ;



// app.use(cp());
// app.use(cors(
//     {
//         origin: ["http://localhost:800/"],
//         methods: ["POST", "GET"],
//         credentials: true
//     }));
// app.use(dy.json());
// app.use(dy.urlencoded({ extended: true })); 


app.get('/' , (req, res) => {
    res.send("Hello") ;
}) ;

app.listen(PORT, () => {
    console.log('app started successsfuly');
}) 