
const mysql=require('mysql');

const conUri={
    host:'localhost',
    user:'root',
    password:'Aman@123',
    database:'customer'
}

const con=mysql.createConnection(conUri);
con.connect((err)=>{
    if(!err){
        console.log('connection stable successfully with mysql database');
    }
    else{
        console.log(err);
    }
});
module.exports=con;
