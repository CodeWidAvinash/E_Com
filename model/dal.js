
const sql=require('./db');

exports.validate= function(userPayload){
    return new Promise(resolve=>{
                let command = "SELECT * FROM REGISTRATION WHERE username='"+userPayload.username+"' and pass ='"+userPayload.password+"';";
                sql.query(command,(err, rows, fields)=>{
                    resolve(rows)
                })
            
        })

}