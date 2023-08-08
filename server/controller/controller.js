let datas=require("../model/get");
const {hashGenerate}=require("./hash");
const {hashValiate}=require("./hash");

exports.create=async(req,res)=>{
    const hashPassword=await hashGenerate(req.body.password);
    const chk=new datas({
        name:req.body.name,
        password:hashPassword,
        

        // comment:req.body.comment
    });
    chk.save().then(doc=>{
        console.log(doc)
        res.redirect("/table");
    })
}
exports.find=(req,res)=>{
    datas.find()
    .then(user=>{
        res.send(user);
    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
    })
}

exports.singledoc=(req,res)=>{
    datas.findById(req.params.id).then((blog) => {
        if (!blog) {
            return res.status(404).send();
        }    
        res.send(blog);
    }).catch((error) => {
        res.status(500).send(error);
    })

}