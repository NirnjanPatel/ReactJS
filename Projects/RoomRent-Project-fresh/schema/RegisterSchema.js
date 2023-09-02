// Mongoose Required
import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const RegisterSchema = mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: [true, "Name is required"],
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    uniquw: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    maxlength: 10,
    minlength: 5,
    trim: true,
  },
  mobile: {
    type: Number,
    required: [true, "Mobile No. is required"],
    lowercase: true,
    trim: true,
    maxlength: 10,
    minlength: 5,
  },
  city: {
    type: String,
    required: [true, "City is required"],
    trim: true,
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
  },
  role: {
    type: String,
    status: Number,
    info: String,
  },
});
// Apply the uniqueValidator plugin to Register with unique values
RegisterSchema.plugin(mongooseUniqueValidator);

// compile schema  to model
const RegisterSchemaModel = mongoose.model(
  "reg_tmp",
  RegisterSchema,
  "register"
);
// 1st para - temporary name
// 2nd para -
// 3rd para - collection name
export default RegisterSchemaModel;
