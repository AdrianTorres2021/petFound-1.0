const { showAllThePets, createPet, deletePet, updatePet, findOneSinglePet } = require("../controllers/pet.controller")


module.exports = (app) => {
    app.get("/api/pet", showAllThePets);
    app.get("/api/pet/:id", findOneSinglePet)
    app.post("/api/pet/new", createPet);
    app.delete("/api/pet/delete/:_id", deletePet);
    app.put("/api/pet/update/:_id", updatePet);
}