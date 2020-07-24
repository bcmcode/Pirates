const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Arrr, pirate name is required matey']
    },
    imageUrl : {
        type: String,
        required: [true, 'Arrr, you must provide an image URL']
    },
    treasureChests : {
        type: Number,
        required: [true, 'Arrr, a pirate must have treasure!']
    },
    catchPhrase: {
        type : String,
        required: [true, 'Arrr, a pirate is not a pirate without a catch phrase']
    },
    position : {
        type: String,
        required: [true, 'Arrr, this pirate must have a position in the crew!']
    },
    pegLeg: {
        type: Boolean,
        required: [true, 'Arrr, we need to know if the pirate has a peg leg or not']
    },
    eyePatch: {
        type: Boolean,
        required: [true, 'Arrr, does the pirate have an eye patch or not?  You must decide']
    },
    hook: {
        type: Boolean,
        required: [true, 'Arrr, does the pirate have two hands or a hook matey?']
    }
}, {timestamps:true})

module.exports.Pirate = mongoose.model('Pirate', PirateSchema);