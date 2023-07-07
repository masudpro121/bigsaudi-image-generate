const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name : String,
  email: String,
  password: String
})

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema)
export default UserModel
