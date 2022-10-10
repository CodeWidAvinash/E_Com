var dal = require('../models/usersDal');
//getAll data
exports.getAll = async function (req, res) {

        let results = [];
        results = await dal.getAll(); console.log(results);
        res.send(results);
};

//get data by id
exports.getById = async function (req, res) {
        let results = [];
        results = await dal.getById(req.params.id);
        res.send(results);
};
// insert        
exports.insert = async (req, res) => {
        let results = [];
        results = await dal.InsertUser(req);
        res.send(results);
};
//update
exports.update = async (req, res) => {
        let results = [];
        results = await dal.update(req, req.params.id);
        res.send(results);
};
//delet
exports.remove = async (req, res) => {
        let results = [];
        results = await dal.remove(req.params.id);
        res.send(results);
};

