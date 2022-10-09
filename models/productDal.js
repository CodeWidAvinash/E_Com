
//var session = require('express-session');
const sql = require('./db');


exports.getAll = function () {
    return new Promise(resolve => {
        let command = "SELECT * FROM products";
        sql.query(command, (err, rows, fields) => {
            resolve(rows);
        })
    })
};


exports.getById = function (id) {
    return new Promise(resolve => {
        let command = "SELECT * FROM  products WHERE productid=" + id;
        sql.query(command, (err, rows, fields) => {
            resolve(rows);
            if(err){
                console.log(err)
            }

        })
    })
};


exports.InsertProduct = function (req) {
    return new Promise(resolve => {
        const { productid, title, unitprice,available,supplierid,unitinstock } = req.body;

        sql.query("insert into products ", { productid, title, unitprice,available,supplierid,unitinstock }, (err, rows, fields) => {
            resolve(rows);
        })

    })
}

exports.remove = function (id) {
    return new Promise(resolve => {
        let command = "DELETE FROM products Where id=" + id;
        sql.query(command, (err, rows, fields) => {
            resolve(rows);
        })
    })
}

exports.update = function (req) {
    return new Promise(resolve => {
        const { id } = req.params;
        const data = req.body;
        sql.query("update products set ? where id=?", [data, id], (err, rows) => {
            resolve(rows);

        })
    })
}
