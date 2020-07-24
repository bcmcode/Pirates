const { Pirate } = require('../models/pirate.model');

module.exports.allPirates = (req, res) => {
    Pirate.find()
        .then(pirates => res.json(pirates))
        .catch(err => res.json(err));
}

module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err))
}

module.exports.onePirate = (req, res) => {
    Pirate.findById(req.params.id)
        .then(pirate => res.json(pirate))
        .catch(err => res.json(err));
}

module.exports.updatePirate = (req, res) => {
    Pirate.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updated => res.json(updated))
        .catch(err => res.status(400).json(err));
}

module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({_id: req.params.id})
        .then(dc => res.json(dc))
        .catch(err => res.json(err))
}