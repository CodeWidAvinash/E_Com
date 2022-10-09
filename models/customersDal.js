
const sql = require('./db');


//get all data 
exports.getAll = function () {
    return new Promise(resolve => {
        let command = "select * from customers";
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
//data get from table based on perticuler id
exports.getById = function (id) {
    return new Promise(resolve => {
        let command = "select * from customers where customerid=" + id;
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

//insert 
exports.insert = function (req) {
    return new Promise(resolve => {
        const { customerid, firstname, lastname, email, contactnumber, address,userid } = req.body;

        sql.query("insert into customers ", { customerid, firstname, lastname, email, contactnumber, address,userid}, (err, rows, fields) => {
            resolve(rows);
        })

    })
}


//data update 
exports.update = function (req) {
    return new Promise(resolve => {
        let command = 'UPDATE customers SET userid = ? WHERE customerid = ?';
        sql.query(command, [req.body.id, req.body.userid], (err, rows, fields) => {
            if (!err) {
                resolve(rows);
            }
            else {
                resolve(err);
            }
        })
    });
};

//data remove 
exports.remove = function (customer_id) {
    return new Promise(resolve => {
        let command = "DELETE from customers where customerid=" + id;
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