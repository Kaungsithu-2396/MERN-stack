getGoals = (req, resp) => {
    resp.json({
        status: "success",
        description: "Goals",
    });
};
addGoals = (req, resp) => {
    if (!req.body.text) {
        resp.status(400);
        throw new Error("please fill the text");
    }
    resp.status(200).json({
        status: "success",
        description: "goals added",
    });
};
updateGoals = (req, resp) => {
    const { id } = req.params;
    resp.status(200).json({
        status: "success",
        description: `Goal no ${id} have been updated`,
    });
};
deleteGoals = (req, resp) => {
    const { id } = req.params;
    resp.status(200).json({
        status: "success",
        descriptoin: null,
    });
};
module.exports = {
    getGoals,
    addGoals,
    deleteGoals,
    updateGoals,
};
