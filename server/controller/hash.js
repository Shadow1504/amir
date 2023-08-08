const bcrypt=require("bcrypt");
const saltRounds=4;

const hashGenerate=async(plainPassword)=>{

    const salt=  await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(plainPassword,salt);
    return hash;
}
module.exports.hashGenerate=hashGenerate;