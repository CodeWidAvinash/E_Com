
exports.login=(req,res)=>{
    let data=req.body;
    console.log(data);
    if(data.email==="avinashkumar5299@gmail.com" && data.password==="aman")
     res.send('welcome '+data.email+"password "+data.password);
     else
     res.send('please enter username and password');
};
exports.register=async(req,res)=>{
    let results=[];
    
    results=await dal.register(req);
    res.send("login sucessfull"); 
};