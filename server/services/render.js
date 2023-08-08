const axios = require('axios');


exports.indfiles=(req,res)=>{

res.render("header")

}
exports.header=(req,res)=>{

    res.render("index")
    
    }
exports.table=(req,res)=>{
    axios.get('http://localhost:10000/api/users')
    
    .then(function(response){
        console.log(response);
        res.render('table', { users : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
}

exports.sing=(req,res)=>{
    axios.get('http://localhost:10000/pages/64b05c6289babc321ca11980')
    
    .then(function(response){
        console.log(response);
        res.render('single', { result : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
}