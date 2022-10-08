
var session = require('express-session');
const sql = require('./db');


exports.Products = function () {
    return new Promise(resolve => {
        let command = "SELECT * FROM products";
        sql.query(command, (err, rows, fields) => {
            resolve(rows);
        })
    })
};


exports.ProductById = function (id) {
    return new Promise(resolve => {
        let command = "SELECT * FROM  products WHERE id=" + id;
        sql.query(command, (err, rows, fields) => {
            resolve(rows);

        })
    })
};




exports.InsertProduct = function (req) {
    return new Promise(resolve => {
        const { categoryId, productName, productPrice } = req.body;

        sql.query("insert into products ", { categoryId, productName, productPrice }, (err, rows, fields) => {
            resolve(rows);
        })

    })
}

exports.RemoveProduct = function (id) {
    return new Promise(resolve => {
        let command = "DELETE FROM products Where id=" + id;
        sql.query(command, (err, rows, fields) => {
            resolve(rows);
        })
    })
}

exports.UpdateProduct = function (req) {
    return new Promise(resolve => {
        const { id } = req.params;
        const data = req.body;
        sql.query("update products set ? where id=?", [data, id], (err, rows) => {
            resolve(rows);

        })
    })
}
