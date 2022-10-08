
const sql=require('./db');


//get 
  exports.getAll=function(){
          return new Promise (resolve=>{
                 let command="select * from orders";
                 sql.query(command,(err,rows,fields)=>{
                     if(!err){
                        resolve(rows);
                    }
                     else{
                         resolve(err);
                     }
        })
    });
};
//data by  id
  exports.getById=function(order_id){
          return new Promise (resolve=>{
                 let command="select * from orders where order_id="+order_id ;
                 sql.query(command,(err,rows,fields)=>{
                     if(!err){
                        resolve(rows);
                     }
                     else{
                         resolve(err);
                     }
        })
    });
};

//insert data into DB
exports.InsertOrders = function (req) {
    return new Promise(resolve => {
        const { orderid,orderdate, orderStatus, customerid } = req.body;
        sql.query("insert into orders set ? ", { orderid,orderdate, orderStatus, customerid}, (err, rows, fields) => {
            resolve(rows);
           if(err){
            console.log(err)
           }
        })
    })
}
//update 
exports.UpdateOrders = function (req) {
    return new Promise(resolve => {
        const { id } = req.params;
        const data = req.body;
        sql.query("update orders set ? where id=?", [data, id], (err, rows) => {
            resolve(rows);

        })
    })
}

//delete
exports.RemoveOrders = function (id) {
    return new Promise(resolve => {
        let command = "DELETE FROM orders Where id=" + id;
        sql.query(command, (err, rows, fields) => {
            resolve(rows);
        })
    })
}