const sql=require('./db')


exports.getAll = function () {
    return new Promise(resolve => {
        let command = "select * from transaction";
        sql.query(command, (err, rows, fields) => {
            let strData = rows;
            resolve(strData);

        });
    });
};