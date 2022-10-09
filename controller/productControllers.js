var dal= require('../models/productDal');

  exports.getAll=async (req,res)=>{
          let results=[];
             results=await dal.getAll();
             res.send(results);
          };


//data get by id
  exports.getById=async (req,res)=>{
          let results=[];
              results=await dal.getById(req.params.id);
              res.send(results);
          };
//inserting    
   exports.insert=async(req,res)=>{
           let results=[];
                results=await dal.insert(req);
                res.send(results); 
           };
//updating 
   exports.update=async(req,res)=>{
           let results=[];
                 results=await dal.update(req);
                 res.send(results);  
           };
//delete
  exports.remove=async(req,res)=>{
          let results=[];
               results=await dal.remove(req.params.id);
                res.send(results);
           };

     