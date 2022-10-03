
const express=require('express');
const expressSession=require('express-session');

const routes=require('./router');
const oneDay= 1000 * 60 * 60 * 24;

const app=express();

app.use(express.urlencoded({extended:true}));
//to convert req body to JSON
app.use(express.json());

var sessionMiddleware=expressSession({
    secret:'cart',
    saveUninitialized:true,
    cookie:{maxAge: oneDay},
    resave: false

});
app.use(sessionMiddleware);
//associat views with express
app.set('view engine','ejs');
routes(app);


app.listen(9000,()=>{
    console.log(' server is listening on port 9000');
});  