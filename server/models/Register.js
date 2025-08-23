import { register } from "module";
import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  event: { type: String, required: true },
});

const Register = mongoose.model("Register", registerSchema);

export default Register;
