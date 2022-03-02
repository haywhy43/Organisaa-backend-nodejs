import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String, required: true },
  full_name: { type: String, required: true },
  nickname: { type: String, required: false },
  identifier: { type: String, required: true },
  issuer: { type: String, required: false },
});

export default mongoose.model("Users", UserSchema);
