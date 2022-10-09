var usersControllers = require('./controller/usersControllers');
var productControllers = require('./controller/productControllers');
var customerControllers= require('./controller/customerController');

module.exports = function (app) {

// users

    app.route('/api/users')
       .get(usersControllers.getAll)
       .post(usersControllers.insert)
       .put(usersControllers.update);
    app.route('/api/users/id')
       .get(usersControllers.getById)
       .delete(usersControllers.remove);

// customers
   app.route('/api/customers')
         .get(customerControllers.getAll)
         .post(customerControllers.insert)
         .put(customerControllers.update);
      app.route('/api/customers/id')
         .get(customerControllers.getById)
         .delete(customerControllers.remove);

// product 
       app.route('/api/products')
       .get(productControllers.getAll)
       .post(productControllers.insert)
       .put(productControllers.update);
    app.route('/api/products/id')
       .get(productControllers.getById)
       .delete(productControllers.remove);

}


