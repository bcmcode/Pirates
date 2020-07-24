const express = require('express');
const app = express();

require("./server/config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./server/routes/pirate.routes')(app);

app.listen(8000, () => console.log('Arrrr, now listening on port 8000 matey'));