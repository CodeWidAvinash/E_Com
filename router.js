var userControllers = require('./controllers/userControllers');
var productControllers = require('./controllers/productControllers');


module.exports = function (app) {

// users

    app.route('/api/users')
       .get(userControllers.getAll)
       .post(userControllers.insert)
       .put(userControllers.update);
    app.route('/api/users/:user_id')
       .get(userControllers.getById)
       .delete(userControllers.remove);

// product 
       app.route('/api/products')
       .get(productControllers.getAll)
       .post(productControllers.insert)
       .put(productControllers.update);
    app.route('/api/products/:id')
       .get(productControllers.getById)
       .delete(productControllers.remove);

}


