// var session = require('express-session');
const sql = require('./db');

exports.getAll = function () {
    return new Promise(resolve => {
        let command = "select * from users";
        sql.query(command, (err, rows, fields) => {
            if (!err) {
                resolve(rows);
            }
            else {
                resolve(err);
            }
        })
    });
};
exports.getById = function (id) {
    return new Promise(resolve => {
        let command = "select * from users where userid=" + id;
        sql.query(command, (err, rows, fields) => {
            resolve(rows);
            if (err) {
                console.log(err);
            }

        })
    })
};
exports.insert = function (req) {
    return new Promise(resolve => {
        const { loginname, password } = req.body;

        sql.query("insert into users set ?", { loginname, password }, (err, rows, fields) => {
            resolve(rows);
        })

    })
}
exports.remove = function (id) {
    return new Promise(resolve => {
        let command = "DELETE FROM users Where userid=" + id;
        sql.query(command, (err, rows, fields) => {
            resolve(rows);
        });
    });
};

exports.update = function (req) {
    return new Promise(resolve => {
        const { id } = req.params;
        const data = req.body;
        sql.query("update users set ? where userid=?", [data, id], (err, rows) => {
            resolve(rows);

        })

    })
}