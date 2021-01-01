const express = require('express');
const app = express()
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('We are on agro api')
})

const port = process.env.PORT || 4000;

app.listen(port, ()=> console.log(`Server run on http://localhost:${port}`));