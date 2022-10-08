var dal= require('../models/usersDal');
//getAll data
  exports.getAll=async (req,res)=>{
          let results=[];
             results=await dal.getAll();
             res.send(results);
          };

//get data by id
  exports.getById=async function(req,res){
          let results=[];
              results=await dal.getById(req.params.user_id);
              res.send(results);
          };   
  // insert        
   exports.insert=async(req,res)=>{
           let results=[];
                results=await dal.insert(req);
                res.send(results); 
           };
//update
   exports.update=async(req,res)=>{
           let results=[];
                 results=await dal.update(req);
                 res.send(results);  
           };
//delet
  exports.remove=async(req,res)=>{
          let results=[];
               results=await dal.remove(req.params.user_id);
                res.send(results);
           };

     