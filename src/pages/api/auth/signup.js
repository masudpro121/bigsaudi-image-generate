import dbConnect from "@/libs/dbConnect";
import UserModel from "@/models/UserModel";

export default async function handler(req, res){
  if(req.method=='POST'){
    await dbConnect()
    const {name, email, password} = req.body
    const user = new UserModel({
      name, email, password
    })
    user.save()
    .then(dbResult=>{
      res.send({status:'ok', result:dbResult})
    })
  }
}