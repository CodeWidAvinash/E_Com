var dal = require('../models/orderDal');
//get all 
exports.getAll = async (req, res) => {
    let results = [];
    results = await dal.getAll();
    res.send(results);
};

//get by id
exports.getById = async function (req, res) {
    let results = [];
    results = await dal.getById(req.params.id);
    res.send(results);
};
//insert
exports.insert = async (req, res) => {
    let results = [];
    results = await dal.insert(req);
    res.send(results);
};
//update
exports.update = async (req, res) => {
    let results = [];
    results = await dal.update(req);
    res.send(results);
};
//delete
exports.remove = async (req, res) => {
    let results = [];
    results = await dal.remove(req.params.id);
    res.send(results);
};

