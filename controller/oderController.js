
var dal= require('../models/ordersDal');


exports.InsertOrders=async(req,res)=>{
    let result=[];
    result=await dal.InsertOrders(req);
    res.send(result);

}

exports.RemoveOrders = async (req, res) => {
    let result = [];
    result = await dal.RemoveOrders(req.params.id)
    res.send(result);
};

exports.Orders=async(req,res)=>{
    let result=[];
    result=await dal.Orders(req);
    res.send(result);
}

exports.UpdateOrders = async (req, res) => {
    let result = [];
    result = await dal.UpdateOrders(req)
    res.send(result);
};

exports.OrdersById = async function (req, res) {
    let result = [];
    result = await dal.OrdersById(req.params.id);
    res.send(result);
};