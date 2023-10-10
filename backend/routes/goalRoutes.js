const express = require("express");
const goalRoutes = express.Router();
const {
    getGoals,
    updateGoals,
    deleteGoals,
    addGoals,
} = require("../controllers/goalControllers");

goalRoutes.route("/").get(getGoals).post(addGoals);
goalRoutes.route("/:id").put(updateGoals).delete(deleteGoals);
module.exports = goalRoutes;
