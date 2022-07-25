const petController = require("../controllers/pet.controller")

// DEFINE ROUTES
module.exports = (app) => {
    app.post("/api/pets/new", petController.createPet)
    app.get("/api/pets", petController.getAllPets)
    app.get("/api/pets/:pet_id", petController.getOnePet)
    app.put("/api/pets/:pet_id", petController.updatePet)
    app.delete("/api/pets/:pet_id", petController.destroyPet)

    app.put("/api/pets/likes/:pet_id", petController.incrementLikes)
}