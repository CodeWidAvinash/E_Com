var session = require('express-session');
const sql = require('./db');

exports.getAll=function(){
    return new Promise(resolve=>{
         let command="SELECT * FROM tasks";
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
     }) 
 };
 
 
 exports.getById=function(id){
     return new Promise(resolve=>{
          let command="SELECT * FROM tasks  WHERE id="+id;
          sql.query(command,(err, rows, fields)=>{
              resolve(rows);
          })
      }) 
  };

  exports.InsertUser = function (req) {
    return new Promise(resolve => {
        const { fullname, email, password } = req.body;

        sql.query("insert into users set ?", { fullname, email, password }, (err, rows, fields) => {
            resolve(rows);
        })

    })
}
exports.RemoveUser = function (id) {
    return new Promise(resolve => {
        let command = "DELETE FROM users Where id=" + id;
        sql.query(command, (err, rows, fields) => {
            resolve(rows);
        })
    })
}

exports.UpdateUser = function (req) {
    return new Promise(resolve => {
        const { id } = req.params;
        const data = req.body;
        sql.query("update users set ? where id=?", [data, id], (err, rows) => {
            resolve(rows);

        })


// product table
        
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
        
                sql.query("insert into products set ?", { categoryId, productName, productPrice }, (err, rows, fields) => {
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
    })
}
// order

//get all data from databases table
exports.getAll=function(){
    return new Promise (resolve=>{
           let command="select * from orderDetails";
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
//data get from database table based on perticuler id
exports.getById=function(order_det_id){
    return new Promise (resolve=>{
           let command="select * from orderdetails where order_det_id="+order_det_id ;
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
exports.insert=function(req){
   //console.log(req.body);
   return new Promise (resolve=>{
          let id=req.body.order_det_id;
          let oi=req.body.order_id;
          let qnt=req.body.quantity;
          let pi=req.body.product_id;
      
          let command="INSERT INTO orderDetails (`order_det_id`,`order_id`,`quantity`,`product_id`) VALUES ("+id+",'"+oi+"','"+qnt+"','"+pi+"')";
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
//data update from database table based on perticuler id
exports.update=function(req){
     return new Promise (resolve=>{
            let command='UPDATE orderDetails SET quantity = ? WHERE order_det_id = ?'; 
                sql.query(command,[req.body.quantity,req.body.order_det_id],(err,rows,fields)=>{
                    if(!err){
                       resolve(rows);
                      }
                    else{
                        resolve(err);
                      }
  })
});
};

//data remove from database table based on perticuler id
exports.remove=function(order_det_id){
    return new Promise (resolve=>{
    let command="DELETE from orderDetails where order_det_id="+order_det_id ;
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