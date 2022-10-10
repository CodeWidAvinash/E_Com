var usersControllers = require('./controller/usersControllers');
var productControllers = require('./controller/productControllers');
var customerControllers= require('./controller/customerController');
var orderControllers=require('./controller/oderController');


module.exports = function (app) {

// users

    app.route('/api/users')
       .get(usersControllers.getAll)
       .post(usersControllers.insert)
       //.put(usersControllers.update);
    app.route('/api/users/:id')
       .get(usersControllers.getById)
       .delete(usersControllers.remove);
    app.route('/api/users/:id')
       .put(usersControllers.update)

// customers
   app.route('/api/customers')
         .get(customerControllers.getAll)
         .post(customerControllers.insert)
         //.put(customerControllers.update);
      app.route('/api/customers/:id')
         .get(customerControllers.getById)
         .delete(customerControllers.remove);
       app.route('/api/customers/:id')
         .put(usersControllers.update)

// product 
       app.route('/api/products')
       .get(productControllers.getAll)
       .post(productControllers.insert)
       //.put(productControllers.update);
    app.route('/api/products/:id')
       .get(productControllers.getById)
       .delete(productControllers.remove);
       app.route('/api/products/:id')
         .put(usersControllers.update)


       app.route('/api/orders')
       .get(orderControllers.getAll)
       .post(orderControllers.insert)
       .put(orderControllers.update);
    app.route('/api/orders/:id')
       .get(orderControllers.getById)
       .delete(orderControllers.remove);

}


