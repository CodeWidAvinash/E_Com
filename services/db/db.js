import mysql from 'my-sql';

const conUri = {
    host: 'localhost',
    user: 'root',
    password: 'Aman@123',
    database: 'e_commerce'
}

const con = mysql.createConnection(conUri);
con.connect((err) => {
    if (!err) {
        console.log('connection stable successfully with mysql database');
    }
    else {
        console.log(err);
    }
});
//module.exports = con;
export default con;