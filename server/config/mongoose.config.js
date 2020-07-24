const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/piratebooty", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Arrrr, esatblished a connection to the database"))
    .catch(() => console.log("Arrrr, something went wrong connecting to the db!", err));