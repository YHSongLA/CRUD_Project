// IMPORT MODEL
const Pet = require("../models/pet.model")

// CREATE
module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json(newPet))
        .catch(error => res.status(400).json(error))
}

// READ ALL
module.exports.getAllPets = (req, res) => {
    Pet.find()
        .then(allPets => res.json(allPets))
        .catch(error => res.json(error))
}

// READ ONE
module.exports.getOnePet = (req, res) => {
    Pet.findOne({_id: req.params.pet_id})
        .then(onePet => res.json(onePet))
        .catch(error => res.json(error))
}

// UPDATE
module.exports.updatePet = (req, res) => {
    // req.body.likes += 1
    Pet.findOneAndUpdate({_id: req.params.pet_id}, req.body, {new: true, runValidators: true})
        .then(updateOnePet => res.json(updateOnePet))
        .catch(error => res.status(400).json(error))
}

// DELETE
module.exports.destroyPet = (req,res) => {
    Pet.deleteOne({_id: req.params.pet_id})
        .then(confirm => res.json(confirm))
        .catch(error => res.json(error))
}

module.exports.incrementLikes = (req, res) => {
    req.body.likes += 1
    Pet.findOneAndUpdate({_id: req.params.pet_id}, req.body, {new: true, runValidators: true})
        .then(updateOnePet => res.json(updateOnePet))
        .catch(error => res.status(400).json(error))
}